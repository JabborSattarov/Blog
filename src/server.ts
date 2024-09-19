import express from "express";

const PORT:number = Number(process.env.PORT) || 9000;

const app = express();



app.listen(PORT, ()=> console.log("localhost "+ PORT))







