module.exports = (sequelize, DataTypes) => {
  const DataPurchaseHistory = sequelize.define("dataPurchaseHistories", {
    categoryId: {
      type: DataTypes.INTEGER
    },
    userId: {
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING
    },
    dataId: {
      type: DataTypes.INTEGER
    },
    dataname: {
      type: DataTypes.STRING
    },
    voterId: {
      type: DataTypes.INTEGER
    },
  });

  return DataPurchaseHistory;
};
  