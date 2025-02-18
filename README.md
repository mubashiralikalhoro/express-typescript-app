# Express TypeScript Template with Hot-Reload Support 🚀

Create your next Express app effortlessly with TypeScript and enjoy the smooth development experience of hot-reload functionality. 😎

## Installation

Get started by running the following command to create a new project:

```bash
npx express-typescript-app <app-name>
```

## How It Works

This CLI tool automates the setup of a TypeScript-based Express application with hot-reloading capabilities using `nodemon`, ensuring your changes are reflected instantly during development.

### File Structure

After running the command, your project directory will look like this:

```
<app-name>/
├── src/
│   ├── app.ts
│   ├── controllers/
│   │   └── whether-controller.ts
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── types/
├── public/
├── package.json
├── tsconfig.json
└── .gitignore
```

- **`src/`**: Contains your TypeScript source files.
  - **`app.ts`**: Main application file for setting up Express.
  - **`controllers/`**: Directory for your application's controllers.
  - **`models/`**: Directory for your application's data models.
  - **`routes/`**: Folder to organize your route handlers.
  - **`utils/`**: Utility functions and helpers.
  - **`types/`**: TypeScript type definitions.
- **`public/`**: Static files served by your application.
- **`package.json`**: Lists your project's dependencies.
- **`tsconfig.json`**: TypeScript configuration file.
- **`.gitignore`**: Specifies intentionally untracked files to ignore.
- **`README.md`**: Documentation for your project.

.

## Dependencies

- **[express](https://www.npmjs.com/package/express)**: Web framework for Node.js

## Development Dependencies

- **[@types/express](https://www.npmjs.com/package/@types/express)**: TypeScript definitions for Express
- **[@types/node](https://www.npmjs.com/package/@types/node)**: TypeScript definitions for Node.js
- **[nodemon](https://www.npmjs.com/package/nodemon)**: Tool for auto-restarting your application during development
- **[typescript](https://www.npmjs.com/package/typescript)**: JavaScript with syntax for types
- **[concurrently](https://www.npmjs.com/package/concurrently)**: Run multiple commands concurrently

Unleash the power of TypeScript and Express in your next project with this handy CLI. Happy coding! 🎉
