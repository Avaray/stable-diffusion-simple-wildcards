import { getCurrentBranch } from "./utils.ts";

const branch = await getCurrentBranch();
const repo = Deno.env.get("GITHUB_REPOSITORY");
const repoName = repo?.split("/")[1];
const repoUrl = new URL(`https://github.com/${repo}`);
const scriptUrl = new URL(`https://raw.githubusercontent.com/${repo}/${branch}/scripts/download.sh`);

export const urls = {
  bash: "https://www.gnu.org/software/bash/",
  wget: "https://www.gnu.org/software/wget/",
  aria2c: "https://aria2.github.io/",
  curl: "https://curl.se/",
  git: "https://git-scm.com/",
  unzip: "https://en.wikipedia.org/wiki/Info-ZIP",
  tar: "https://www.gnu.org/software/tar/",
} as { [key: string]: string };

export const automatic = [
  {
    type: "automatic",
    tools: ["bash", "wget"],
    commands: [`wget -qO- ${scriptUrl} | bash -s -- wget ${branch}`],
  },
  {
    type: "automatic",
    tools: ["bash", "aria2c"],
    commands: [
      `aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh ${scriptUrl}`,
      "chmod +x dl.sh",
      `./dl.sh aria2c ${branch}`,
    ],
  },
  {
    type: "automatic",
    tools: ["bash", "curl"],
    commands: [`curl -s ${scriptUrl} | bash -s -- curl ${branch}`],
  },
] as { type: string; tools: string[]; commands: string[] }[];

export const manual = [
  {
    type: "manual",
    tools: ["git"],
    commands: [
      `git clone --depth 1 --single-branch --branch ${branch} ${repoUrl}.git`,
      `mv ${repoName}/wildcards/*.txt . > /dev/null 2>&1`,
      `rm -rf ${repoName}`,
    ],
  },
] as { type: string; tools: string[]; commands: string[] }[];
