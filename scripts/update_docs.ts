console.log('Starting');

console.log(`meta path: ${import.meta.path}`);
console.log(`meta dir: ${import.meta.dir}`);
console.log(`Bun.env.PWD: ${Bun.env.PWD}`);

// https://docs.github.com/en/actions/learn-github-actions/variables
// https://docs.github.com/en/actions/learn-github-actions/contexts#github-context

// import { $ } from 'bun';
import { readdir } from 'node:fs/promises';
import { urls, automatic, manual } from './commands.ts';

const branches = {
  sdxl: {
    name: 'Stable Diffusion XL',
  },
  pdxl: {
    name: 'Pony Diffusion XL',
  },
};

// if (!Bun.env.GITHUB_REPOSITORY || !Bun.env.GITHUB_REF_NAME || !Bun.env.GITHUB_API_URL || !Bun.env.PWD) {
//   console.log('This script must be run in a GitHub Action environment');
//   process.exit(1);
// }

const repoOwner = Bun.env.GITHUB_REPOSITORY?.split('/')[0];
const repoName = Bun.env.GITHUB_REPOSITORY?.split('/')[1];
const branchName = Bun.env.GITHUB_REF_NAME || 'sdxl';
const apiURL = Bun.env.GITHUB_API_URL;
const rawUrl = `https://raw.githubusercontent.com/Avaray/stable-diffusion-simple-wildcards/${branchName}/wildcards/`;

const path = Bun.env.GITHUB_REPOSITORY ? Bun.env.PWD : import.meta.dir;

const wildcards = await readdir(`${path}/wildcards`);
const filesList = `${wildcards.map((w) => `- [${w.split('.')[0]}](${rawUrl}/${w})\n`).join('')}\n`;

const downloadMethod = (method: {
  type: string;
  tools: string[];
  commands: string[];
}) => {
  const header = `### Download${method.type === 'automatic' ? ' automatically' : ''} with ${method.tools.map((tool) => `[${tool.toUpperCase()}](${urls[tool]})`).join(' and ')}\n\n`;
  const code = `\`\`\`bash\n${method.commands.join(' && ')}\n\`\`\`\n`;

  return header + code;
};

const wrapInDetails = (content: string) => {
  const parts = content.split('###');
  if (parts.length < 3) return content;

  return (
    parts[0] +
    '###' +
    parts[1] +
    '<details>\n<summary>Show more commands</summary>\n\n###' +
    parts.slice(2).join('###') +
    '\n\nYou can find more ways to download the wildcards in [DOWNLOAD.md](docs/DOWNLOAD.md) file.\n\n</details>'
  );
};

const replaceNonBranchContent = (content: string) => {
  const emptyLinesInListRegex = new RegExp('(- \\[.*\\])\\n\\n', 'gm');
  const commentRegex = new RegExp('<!--[^]*?-->', 'gm');
  const regex = new RegExp(
    `<!--\\s*(?!${branchName})(\\w+)\\s*-->([\\s\\S]*?)<!--\\s*/\\1\\s*-->`,
    'gm',
  );
  return content.replace(regex, '').replace(commentRegex, '');
};

const automaticMethods = automatic.map((m) => downloadMethod(m)).join('\n');

const manualMethods = manual.map((m) => downloadMethod(m)).join('\n');

const docsFiles = await readdir(`${path}/src`);

docsFiles.forEach(async (file) => {
  let content = await Bun.file(`${path}/src/${file}`).text();

  content = replaceNonBranchContent(content);

  let processedAutomaticMethods = automaticMethods;

  if (file === 'README.md') {
    processedAutomaticMethods = wrapInDetails(automaticMethods);
  }

  const processed = content
    .replaceAll('{{filesList}}', filesList)
    .replaceAll('{{branch}}', branchName)
    .replaceAll('{{automaticMethods}}', processedAutomaticMethods)
    .replaceAll('{{manualMethods}}', manualMethods)
    .replaceAll('{{amount}}', wildcards.length.toString())
    .replace(/^\n\n/gm, '\n');

  if (file === 'README.md') {
    await Bun.write(`${path}/${file}`, processed);
  } else {
    await Bun.write(`${path}/docs/${file}`, processed);
  }
});

console.log('Done');
