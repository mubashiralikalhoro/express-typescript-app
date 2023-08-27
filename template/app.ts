import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});
