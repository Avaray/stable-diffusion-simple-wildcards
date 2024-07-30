import data from '../package.json';

// These will come from environment variables in the future
// Need to figure out how to handle this with GitHub Actions
const branch = 'sdxl';
const repositoryName = data.name;
const repositoryUrl = data.repository.url;
const scriptUrl = `https://raw.githubusercontent.com/${data.Author}/${repositoryName}/${branch}/scripts/download.sh`

export const urls = {
  bash: 'https://www.gnu.org/software/bash/',
  wget: 'https://www.gnu.org/software/wget/',
  aria2c: 'https://aria2.github.io/',
  curl: 'https://curl.se/',
  git: 'https://git-scm.com/',
  unzip: 'https://en.wikipedia.org/wiki/Info-ZIP',
  tar: 'https://www.gnu.org/software/tar/',
} as { [key: string]: string };

export const automatic = [
  {
    tools: ['bash', 'wget'],
    commands: [
      `wget -qO- ${scriptUrl} | bash -s -- wget sdxl`,
    ]
  },
  {
    tools: ['bash', 'aria2c'],
    commands: [
      `aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh ${scriptUrl}`,
      'chmod +x dl.sh',
      './dl.sh aria2c sdxl',
    ]
  },
  {
    tools: ['bash', 'curl'],
    commands: [
      `curl -s ${scriptUrl} | bash -s -- curl sdxl`,
    ]
  },
]

export const manual = [
  {
    tools: ['wget', 'unzip'],
    commands: [
      `wget -qO- ${scriptUrl} | bash -s -- unzip sdxl`,
    ]
  },
  {
    tools: ['wget', 'tar'],
    commands: [
      `wget -qO- ${scriptUrl} | bash -s -- tar sdxl`,
    ]
  },
  {
    tools: ['git'],
    commands: [
      `git clone --single-branch --branch sdxl ${repositoryUrl}`,
      `mv ${repositoryName}/wildcards/*.txt . > /dev/null 2>&1`,
      `rm -rf ${repositoryName}`,
    ]
  },
]
