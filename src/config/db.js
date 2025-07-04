import { sequelize } from "./database.js";
export const status = sequelize.sync({ force : false})
.then(()=>{
    console.log("conexion completa a la base de datos")
})
.catch((error)=>{
    console.error("error al sincronizar con la base de datos:", error)
});
