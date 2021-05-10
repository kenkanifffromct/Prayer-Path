const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/prayerpath"
);

const prayerSeed = [
  {
    name: "Rylee (dog)",
    detail:
      "Hurt leg really bad. Also, having kidney issues",
    date: new Date(Date.now())
  },
  {
    name: "Pop-Pop",
    detail:
      "Worsening Alzheimer's",
    date: new Date(Date.now())
  },
  {
    name: "Me",
    detail:
      "Coding Bootcamp is OVER! Woooo!",
    date: new Date(Date.now())
  }];

  db.Prayer
  .remove({})
  .then(() => db.Prayer.collection.insertMany(prayerSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });