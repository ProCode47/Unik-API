const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");
const { v4: uuidv4 } = require("uuid");


router.get("/generate", (req, res) => {
  const entry = new Entry({
    uuid: uuidv4(),
    pseudonym: runam
  });
  entry
    .save()
    .then((data) => {
      // res.json(data);
    })
    .catch((err) => {
      res.json({ message: err });
    });
  Entry.find()
      .then((entries) => {
      res.json(entries);
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
