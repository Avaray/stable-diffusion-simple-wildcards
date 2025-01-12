export async function getCurrentBranch(): Promise<string> {
  try {
    const command = new Deno.Command("git", {
      args: ["rev-parse", "--abbrev-ref", "HEAD"],
    });
    const { code, stdout } = await command.output();
    const decoder = new TextDecoder();
    return code === 0 ? decoder.decode(stdout).trim() : "";
  } catch {
    return "";
  }
}

export async function getTrackedFiles(directory: string): Promise<string[]> {
  try {
    const gitCommand = new Deno.Command("git", {
      args: ["ls-tree", "-r", "--name-only", "HEAD", directory],
      cwd: directory,
    });
    const { code, stdout } = await gitCommand.output();
    if (code !== 0) return [];
    const decoder = new TextDecoder();
    const output = decoder.decode(stdout);
    return output
      .split("\n")
      .filter(file => file.trim() !== "")
      .map(file => file.trim());
  } catch {
    return [];
  }
}
