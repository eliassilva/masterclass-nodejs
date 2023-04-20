import express from "express";

const app = express();

app.use(express.static("public"));

app.get("/", (req: any, res: any) => {
  res.send("masterclass nodejs");
});

app.listen(8080, () => {
  console.log("server is running...");
});
