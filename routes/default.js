const express = require("express");
const router = express.Router();
const Entry = require("../models/entry");
const { v4: uuidv4 } = require("uuid");
const time = new Date();
const stamp = JSON.stringify(time);
const timestamp = stamp.replace(".", ":");

router.get("/generate", (req, res) => {
  Entry.collection.insertOne(
    {
      [timestamp]: uuidv4(),
    },
    function (err, res) {
      if (err) {
        console.log(err);
      }
    }
  );
  Entry.find()
      .then((entries) => {
        const sortedEntries = entries.reverse()
      res.send({ entries:sortedEntries });
    })
    .catch((err) => {
      throw err;
    });
});

module.exports = router;
