module.exports = (sequelize, DataTypes) => {
  const DataPurchaseHistory = sequelize.define("datapurchasehistories", {
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
    voterdate: {
      type: DataTypes.DATEONLY
    },
  });

  return DataPurchaseHistory;
};
  