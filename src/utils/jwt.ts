import jwt from "jsonwebtoken";
const secretKey:string = String(process.env.SECRET_KEY) 

export const sign = (payload:Object) => jwt.sign(payload, secretKey )