import express, {Application} from "express";
import { connectionDB } from "./database/configDB";
import {router} from "./routers/router"

const PORT:number = Number(process.env.PORT) || 9000;

const app:Application = express();

app.use(express.json());

app.use(router)


connectionDB.initialize().then(():void => console.log("its working")).catch( (error:Error):void => console.log(error));

app.listen(PORT, ():void => console.log("localhost "+ PORT))







