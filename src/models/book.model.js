import { sequelize } from "../config/database.js";
import { DataTypes, Sequelize } from "sequelize";

export const bookModel =  sequelize.define(
    "book",
    {
        title: {
            type:DataTypes.TEXT,
            allowNull:false,

         }
    },
    {
        author: {
            type:DataTypes.TEXT}
        },
    {
        pages: {
            type:DataTypes.INTEGER
        }
    },
    {
        genre: {
            type:DataTypes.TEXT
        }
    },
    {
        description: {
            type:DataTypes.TEXT
        }
    }


);

export const status = sequelize.sync({ force : true})
.then(()=>{
    console.log("conexion completa a la base de datos")
})
.catch((error)=>{
    console.error("error al sincronizar con la base de datos:", error)
});

