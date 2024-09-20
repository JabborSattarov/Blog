import { DataSource } from "typeorm"
import path from "path";
export const connectionDB = new  DataSource({
    type:"postgres",
    url: "postgres://gkaeglxo:fLOVMWzo5EE7Sa1pTPtxmYgsLX6DmTLS@arjuna.db.elephantsql.com/gkaeglxo",
    synchronize: true,
    logging:true,
    entities: [
        path.join(__dirname, "..", "entities", "*.entity.{ts,js}")
    ],
    migrations: [path.join(__dirname, "..", "migrations", "*.{ts,js}")],
   
})

