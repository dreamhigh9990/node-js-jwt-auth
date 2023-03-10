const controller = require("../controllers/passedTest.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
    
    // frontend routes
    app.get(
        "/api/findPassedTestById/:id",
        controller.findPassedTestById
    );
    
    app.post(
        "/api/passedTest/create",
        controller.createPassedTest
    );
    app.put(
      "/api/passedTest/update/:id",
      controller.updatePassedTest
    );
}