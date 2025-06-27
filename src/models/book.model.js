import { sequelize } from "../config/database";
import { DataTypes, Sequelize } from "sequelize";

const bookModel = sequelize.define(
    "book",
    {

    },
    {

    },
    {

    },
    {

    }

)
(async ()=>{
    await sequelize.sync({ force:true });
})();