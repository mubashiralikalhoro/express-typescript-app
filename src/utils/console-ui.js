import ora from "ora";
import inquirer from "inquirer";

const inq = inquirer.createPromptModule();

const input = async (message, def) => {
  const answer = await inq({
    message: message,
    type: "input",
    name: "name",
    default: def,
  });
  return answer?.name || def;
};

const loading = (message) => {
  const spinner = ora({
    message,
  }).start();

  spinner.text = message;
  return {
    success: (message) => {
      spinner.succeed(message);
    },
    fail: (message) => {
      spinner.fail(message);
    },
  };
};

export default { input, loading };
