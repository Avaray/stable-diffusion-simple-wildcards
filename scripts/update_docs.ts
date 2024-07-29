console.log('Starting');

// import { $ } from "bun"
import { readdir } from "node:fs/promises";

console.log(Bun.env);

// const PWD = Bun.env.PWD;

process.exit(0);

const wildcards = await readdir('../wildcards');

const repoName = Bun.env.GITHUB_REPOSITORY?.split('/')[1];
const repoOwner = Bun.env.GITHUB_REPOSITORY?.split('/')[0];
const branchName = Bun.env.GITHUB_REF_NAME;
const apiURL = Bun.env.GITHUB_API_URL;

