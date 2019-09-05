const express = require("express");
const cors = require("cors");
const { urlGoogle, getGoogleAccountFromCode } = require("./google-util");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/auth/google", (req, res) => {
  const url = urlGoogle();

  res.json(url);
});

app.post("/authenticate", async (req, res) => {
  const { code } = req.body;

  const user = await getGoogleAccountFromCode(code);

  console.log(user);

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

app.listen(3333);
