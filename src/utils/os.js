import { execSync } from "child_process";
import fs from "fs";

const createFile = (path, content) => {
  fs.writeFileSync(path, content);
};

const runCommand = (command) => {
  execSync(command, { stdio: "inherit" });
};

export default { runCommand, createFile };
