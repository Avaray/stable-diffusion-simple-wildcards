// https://docs.github.com/en/actions/learn-github-actions/variables
// https://docs.github.com/en/actions/learn-github-actions/contexts#github-context

import { readdir } from "node:fs/promises";
import { join } from "node:path";
import { automatic, manual, urls } from "./commands.ts";
import { getCurrentBranch, getTrackedFiles } from "./utils.ts";

const branchName = await getCurrentBranch();
!branchName && (console.log("Failed to get the current branch"), Deno.exit(1));
console.log(`Branch: ${branchName}`);

const cwd = Deno.cwd();
console.log(`CWD: ${cwd}`);

console.log(`meta.filename: ${import.meta.filename}`);
console.log(`meta.dir: ${import.meta.dirname}`);

const repo = Deno.env.get("GITHUB_REPOSITORY");
!repo && (console.log('Missing "GITHUB_REPOSITORY" environment variable'), Deno.exit(1));
console.log(`GITHUB_REPOSITORY: ${repo}`);

const repoOwner = repo?.split("/")[0];
const repoName = repo?.split("/")[1];

const rawUrl = `https://raw.githubusercontent.com/${repoOwner}/${repoName}/${branchName}/wildcards/`;
const archiveUrl = `https://github.com/${repoOwner}/${repoName}/releases/latest/download/${repoName}-${branchName}.zip`;

const wildcardsDir = join(cwd, "wildcards");
const wildcards = await getTrackedFiles(wildcardsDir);
!wildcards.length && (console.log("No wildcard files found"), Deno.exit(0));
console.log(`Found ${wildcards.length} wildcard files`);

const filesList = wildcards.map((w) => `- [${w.split(".")[0]}](${new URL(w, rawUrl).href})`).join("\n");

const downloadMethod = (method: { type: string; tools: string[]; commands: string[] }) => {
  const header = `### Download${method.type === "automatic" ? " automatically" : ""} with ${method.tools.map((tool) => `[${tool.toUpperCase()}](${urls[tool]})`).join(" and ")
    }\n\n`;
  const code = `\`\`\`bash\n${method.commands.join(" && ")}\n\`\`\`\n`;

  return header + code;
};

const wrapInDetails = (content: string) => {
  const parts = content.split("###");
  if (parts.length < 3) return content;

  return (
    parts[0] +
    "###" +
    parts[1] +
    "<details>\n<summary>Show more commands</summary>\n\n###" +
    parts.slice(2).join("###") +
    "\n\nYou can find more ways to download the wildcards in [DOWNLOAD.md](docs/DOWNLOAD.md) file.\n\n</details>"
  );
};

const replaceNonBranchContent = (content: string) => {
  // Regex to match all branch blocks except the current branch
  const regex = new RegExp(
    `- (?!${branchName})\w+-start.*?- (?!${branchName})\w+-end`,
    "gms",
  );
  // Remove non-branch content, branch blocks, comments and multiple empty lines
  return content.replace(regex, "").replace(/^- \w+-(?:end|start)\n?/gm, "").replace(/^<!.*?->/gms, "").replace(/^\n{2,}/gm, "\n");
};

const automaticMethods = automatic.map((m) => downloadMethod(m)).join("\n");

const manualMethods = manual.map((m) => downloadMethod(m)).join("\n");

const docsFiles = await readdir(join(cwd, "src"));

docsFiles.forEach(async (file) => {
  let content = await Deno.readTextFile(join(cwd, "src", file));

  content = replaceNonBranchContent(content);

  let processedAutomaticMethods = automaticMethods;

  file === "README.md" && (processedAutomaticMethods = wrapInDetails(automaticMethods));

  const processed = content
    .replaceAll("{{filesList}}", filesList)
    .replaceAll("{{archiveUrl}}", archiveUrl)
    .replaceAll("{{branch}}", branchName)
    .replaceAll("{{automaticMethods}}", processedAutomaticMethods)
    .replaceAll("{{manualMethods}}", manualMethods)
    .replaceAll("{{amount}}", wildcards.length.toString())
    .replace(/^\n{2,}/gm, "\n");

  if (file === "README.md") {
    await Deno.writeTextFile(join(cwd, file), processed);
  } else {
    await Deno.writeTextFile(join(cwd, "docs", file), processed);
  }
});

console.log("Done");

