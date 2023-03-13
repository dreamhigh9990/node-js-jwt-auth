const { article } = require("../models");
const db = require("../models");
PassedTest = db.passedTest
BrowseHistory = db.browseHistory
User = db.user


// Get the browseHistories for a given user
exports.findPassedTestById = (req, res) => {
    PassedTest.findAll({
        include: [
            {
                model: db.campusCategory,
                as: "campusCategory",
                attributes: ['title']
            }
        ],
        where: { userId: req.params.id }
    }
    )
        .then((user) => {
            // res.json(user)
            res.status(200).send(user);
        });
};


//Create New passed history
exports.createPassedTest = (req, res) => {
    //save new passed history to database
    PassedTest.create({
        date: req.body.date,
        testing_counter: req.body.testing_counter,
        passed_counter: req.body.passed_counter,
        userId: req.body.userId,
        campusCategoryId: req.body.campusCategoryId,
        level: req.body.level
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update PassedTest
exports.updatePassedTest = (req, res) => {
    PassedTest.update({
        date: req.body.date,
        testing_counter: req.body.testing_counter,
        passed_counter: req.body.passed_counter,
        userId: req.body.userId,
        campusCategoryId: req.body.campusCategoryId,
        level: req.body.level
    },
      {
        where: {
          id: req.params.id
        },
      }).then(result => {
        res.status(200).send(result);
      });
  };
