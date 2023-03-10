module.exports = (sequelize, DataTypes) => {
    const DataPurchaseHistory = sequelize.define("dataPurchaseHistoies", {
      categoryId: {
        type: DataTypes.STRING
      },
      dataname: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      userId: {
        type: DataTypes.INTEGER
      },
      dataId: {
        type: DataTypes.INTEGER
      },
    });
  
    return DataPurchaseHistory;
  };
  