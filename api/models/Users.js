const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define('user', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          username: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    },{timestamps: false});
};