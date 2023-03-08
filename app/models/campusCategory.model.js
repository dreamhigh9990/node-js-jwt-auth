module.exports = (sequelize, DataTypes) => {
    const CampusCategory = sequelize.define("campusCategories", {
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      parentId:{
        type: DataTypes.INTEGER
      },
      treeValue:{
        type: DataTypes.STRING
      },
    });
  
    return CampusCategory;
  };
  