console.log('Starting');

// import { $ } from "bun"
import { readdir } from "node:fs/promises";

const wildcards = await readdir('../wildcards');

const repoName = Bun.env.GITHUB_REPOSITORYQ?.split('/')[1];
const repoOwner = Bun.env.GITHUB_REPOSITORYC?.split('/')[0];
const branchName = Bun.env.GITHUB_REF_NAME;
const apiURL = Bun.env.GITHUB_API_URL;
