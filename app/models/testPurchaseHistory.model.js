module.exports = (sequelize, DataTypes) => {
  const TestPurchaseHistory = sequelize.define("testPurchaseHistories", {
    userId: {
      type: DataTypes.INTEGER
    },
    level: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
  });

  return TestPurchaseHistory;
};