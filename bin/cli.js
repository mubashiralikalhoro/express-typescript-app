#!/usr/bin/env node

import { execSync } from "child_process";

const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (error) {
    console.log(error);
    return false;
  }

  return true;
};

const projectName = process.argv[2];

const command = `git clone https://github.com/mubashiralikalhoro/express-typescript-arc.git ${projectName}`;
console.log("Cloning express-typescript-arc... ");

runCommand(command);

console.log("Installing dependencies...");
