import os
import sys 
from urllib.request import urlopen

branches = ["sdxl", "pdxl"]
branch = branches[0]

# Check if branch is provided and if it is valid
if len(sys.argv) > 1 and sys.argv[1] in branches:
    branch = sys.argv[1]
elif len(sys.argv) > 1:
    print(f"Invalid branch name {sys.argv[1]}")
    print(f"Valid branches are: {', '.join(branches)}")
    print(f"Using default branch {branch}")


# Get GITHUB_CLIENT and GITHUB_SECRET from environment variables
api_credentials = ""
github_client = os.environ.get('GITHUB_CLIENT')
github_secret = os.environ.get('GITHUB_SECRET')

if github_client and github_secret:
    api_credentials = f"&client_id={github_client}&client_secret={github_secret}"
    print("Using GitHub API credentials for GitHub authentication")

repo_owner="Avaray"
repo_name="stable-diffusion-simple-wildcards"
repo_url=f"https://github.com/{repo_owner}/{repo_name}/"
repo_url_api=f"https://api.github.com/repos/{repo_owner}/{repo_name}/contents/wildcards?ref={branch}{api_credentials}"

# print(f"Repo URL: {repo_url_api}")

files_to_download = []

print("Getting files list for branch %s" % branch)

# CONTINUE HERE
