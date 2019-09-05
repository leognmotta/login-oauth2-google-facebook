const express = require("express");
const cors = require("cors");
const { urlGoogle, getGoogleAccountFromCode } = require("./google-util");
const auth = require("./middlewares");

const app = express();

app.use(express.json());
app.use(cors());

let user;

app.get("/auth/google", (req, res) => {
  const url = urlGoogle();

  res.json(url);
});

app.post("/authenticate/google", async (req, res) => {
  const { code } = req.body;

  user = await getGoogleAccountFromCode(code);

  const { tokens } = user;

  res.json(tokens);
});

app.get("/private", auth, (req, res) => {
  res.json({ private_message: "Developers are gods!" });
});

app.listen(3333);
