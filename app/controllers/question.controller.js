const db = require("../models");
Question = db.question;
User = db.user;
degree = db.degree

// Get all users include questions
exports.findAll = (req, res) => {
    return Question.findAll({
        include: ["degree"],
    }).then((questions) => {
        res.json(questions)
    });
};

// Get the questions for a given user id
exports.findQuestionById = (req, res) => {
    return Question.findByPk(req.params.id, { include: ["degree"] })
        .then((question) => {
            res.status(200).send(question);
        });
};

// Get the user for a given question id
exports.findUserById = (req, res) => {
    return Question.findByPk(req.params.id, { include: ["user"] })
        .then((question) => {
            res.json(question)
        })
        .catch((err) => {
            console.log(">> Error while finding question: ", err);
        });
};


//Get All Questions
exports.getAllQuestions = (req, res) => {
    Question.findAll({
    }).then(result => {
        res.status(200).send(result)
    });
};

//Get Question
exports.getQuestion = (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
}

// Create New Question
exports.createQuestion = async (req, res) => {

    // Save Question to Database
    Question.create({
        level: req.body.level,
        description: req.body.description,
        degreeId: req.body.degreeId
    })
        .then(question => {
            res.status(200).send(question);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Question
exports.updateQuestion = (req, res) => {
    Question.update(
        {
            level: req.body.level,
            description: req.body.description,
            degreeId: req.body.degreeId
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};

// Delete Question
exports.deleteQuestion = async (req, res) => {
    try {
        const postDelete = await Question.destroy({ where: { id: req.params.id } });
        res.json(postDelete)
    } catch (error) {
        console.log(error)
    }
};
