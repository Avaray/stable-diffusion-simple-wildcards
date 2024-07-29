import data from '../package.json';

// These will come from environment variables in the future
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
}

export const automatic = {
  wget: {
    commands: [
      `wget -qO- ${scriptUrl} | bash -s -- wget sdxl`,
    ]
  },
  aria2c: {
    commands: [
      `aria2c -q --allow-overwrite=true --remove-control-file=true -o dl.sh ${scriptUrl}`,
      'chmod +x dl.sh',
      './dl.sh aria2c sdxl',
    ]
  },
  curl: {
    commands: [
      `curl -s ${scriptUrl} | bash -s -- curl sdxl`,
    ]
  },
}

export const manual = [
  {
    tools: ['git'],
    commands: [
      `git clone --single-branch --branch sdxl ${repositoryUrl}`,
      `mv ${repositoryName}/wildcards/*.txt . > /dev/null 2>&1`,
      `rm -rf ${repositoryName}`,
    ]
  }
]
