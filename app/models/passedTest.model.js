module.exports = (sequelize, Sequelize) => {
    const PassedTest = sequelize.define("passedTests", {
        level: {
            type: Sequelize.STRING
        },
        testing_counter: {
            type: Sequelize.INTEGER
        },
        passed_counter: {
            type: Sequelize.INTEGER
        }       
    });

    return PassedTest;
};