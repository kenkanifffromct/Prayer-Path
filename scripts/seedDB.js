const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/prayers"
);

const prayerSeed = [
  {
    name: "Rylee (dog)",
    details:
      "Hurt leg really bad. Also, having kidney issues",
    date: new Date(Date.now())
  },
  {
    name: "Pop-Pop",
    details:
      "Worsening Alzheimer's",
    date: new Date(Date.now())
  },
  {
    name: "Me",
    details:
      "Coding Bootcamp is OVER! Woooo!",
    date: new Date(Date.now())
  },
  {
    name: "Uncle Art",
    details:
      "In the ER. Possible back issues, maybe heart. Waiting for more info.",
    date: new Date(Date.now())
  },
  {
    name: "Torian",
    details:
      "Finding a new car after she totalled her old one.",
    date: new Date(Date.now())
  },
  {
    name: "Ashley",
    details:
      "Needs to meet her requirements for becoming a dulah",
    date: new Date(Date.now())
  },
  {
    name: "Youth Group",
    details:
      "New leadership needed. Hopefully it's found soon.",
    date: new Date(Date.now())
  },
];

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