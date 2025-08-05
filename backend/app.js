if(process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require('express');
const app = express();
const port = process.env.port || 8080;
const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URL;

main().then(() => {
  console.log(`DB connected`);
}).catch((e) => {
  console.log(e);
})

async function main() {
  await mongoose.connect(dbUrl);
}

app.get("/", (req, res) => {
  res.send(`Backend`)
});
app.listen(port, () => {
  console.log(`listening at ${port}`);
});