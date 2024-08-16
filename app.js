const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

const { getContact } = require("./handlerFunctions/getContact");
const { createContact } = require("./handlerFunctions/createContact");
const { updateContact } = require("./handlerFunctions/updateContact");
const { deleteContact } = require("./handlerFunctions/deleteContact");

app.use(express.json());

app.post("/createContact", createContact);
app.get("/getContact", getContact);
app.post("/updateContact", updateContact);
app.delete("/deleteContact", deleteContact);

app.listen(port, () => {
  console.log("listening on port : " + port);
});
