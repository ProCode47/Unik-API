const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");
const { v4: uuidv4 } = require("uuid");

const {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} = require("unique-names-generator");


router.get("/generate", (req, res) => {
  const uniqueName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    length: 3,
    separator: "-",
  });
  const data = {
    uuid: uuidv4(),
    pseudonyms: uniqueName,
  };
  Entry.create(data)
    .then((info) => {
    //  res.json(info)
    })
    .catch((err) => {
      res.json({ error: err });
    });
  
    Entry.find()
    .then((entries) => {
      res.json(entries);
    })
    .catch((err) => {
      console.log(err) ;
    });
});

module.exports = router;
