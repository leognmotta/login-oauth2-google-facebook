const express = require("express");
const cors = require("cors");
const { urlGoogle, getGoogleAccountFromCode } = require("./google-util");

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

  const { id, email, tokens, name, avatar, gender } = user;

  res.json({
    id,
    email,
    tokens,
    name,
    avatar,
    gender
  });
});

app.post("/authenticate/facebook", async (req, res) => {
  user = req.body;

  console.log(req.body)

  return res.json(user);
});

app.listen(3333);
