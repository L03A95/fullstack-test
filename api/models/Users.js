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
            type: DataTypes.STRING,
            allowNull: false
          },
          gmail: {
            type: DataTypes.STRING,
            allowNull: false
          },
          currency: {
            type: DataTypes.INTEGER
          },
          profilePic: {
            type: DataTypes.STRING
          }
    },{timestamps: false});
};