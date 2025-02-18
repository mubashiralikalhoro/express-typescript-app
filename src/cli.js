#!/usr/bin/env node
import os from "./utils/os.js";
import files from "./files/files.js";
import consoleUI from "./utils/console-ui.js";

const createProject = (projectName) => {
  try {
    // creating folders
    const creatingFolderSpinner = consoleUI.loading("Creating folders...");
    os.runCommand(`mkdir ${projectName}`);
    os.runCommand(`mkdir ${projectName}/src`);
    os.runCommand(`mkdir ${projectName}/src/controllers`);
    os.runCommand(`mkdir ${projectName}/src/models`);
    os.runCommand(`mkdir ${projectName}/src/routes`);
    os.runCommand(`mkdir ${projectName}/src/utils`);
    os.runCommand(`mkdir ${projectName}/src/types`);
    os.runCommand(`mkdir ${projectName}/public`);
    creatingFolderSpinner.success("Folders created successfully!");

    // creating files
    const creatingFileSpinner = consoleUI.loading("Creating files...");
    os.createFile(`${projectName}/package.json`, files.get_package_json(projectName));
    os.createFile(`${projectName}/src/app.ts`, files.app_ts);
    os.createFile(`${projectName}/tsconfig.json`, files.ts_config);
    os.createFile(`${projectName}/.gitignore`, files.git_ignore);
    os.createFile(`${projectName}/src/controllers/whether-controller.ts`, files.whether_controller);
    creatingFileSpinner.success("Files created successfully!");

    // installing dependencies
    const devDependencies = ["@types/express", "@types/node", "nodemon", "typescript", "concurrently"];
    const dependencies = ["express"];

    const installSpinner = consoleUI.loading("Installing dependencies...");
    os.runCommand(`cd ${projectName} && npm install ${dependencies.join(" ")}`);
    os.runCommand(`cd ${projectName} && npm install -D ${devDependencies.join(" ")}`);
    installSpinner.success("Dependencies installed successfully!");

    console.log("App created successfully!");
    console.log("Thank you for using express-typescript-arc!");
    console.log("Created by Mubashir Ali Kalhoro");
    console.log(`Run 'cd ${projectName} && npm run dev' to start the development server`);
  } catch (e) {
    console.log(e);
    console.log("Something went wrong!");
  }
};

// Main

const projectName = process.argv[2];

if (!projectName) {
  consoleUI.input("Enter project name: ", "my-project").then((ans) => {
    createProject(ans);
  });
} else {
  createProject(projectName);
}
