import { sequelize } from "../config/database.js";
import { DataTypes, Sequelize } from "sequelize";
//title, author, pages, genre,description
export const bookModel =  sequelize.define(
    "books",
    {
        title:{
            type: DataTypes.STRING,
            allowNull: false
        },
        author:{
            type:DataTypes.STRING,
            allowNull:false
        },
        pages:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        genre:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        description:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },{createdAt:false, updatedAt:false}


);

