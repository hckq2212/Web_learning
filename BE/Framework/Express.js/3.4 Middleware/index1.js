import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) =>{
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
