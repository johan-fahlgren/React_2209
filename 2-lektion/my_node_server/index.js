import express from "express"; //es6 syntax

const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
