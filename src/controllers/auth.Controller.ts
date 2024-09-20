import { Request, Response, NextFunction } from "express";
import { connectionDB } from "../database/configDB";
import { UsersEntity } from "../entities/users.entity";
import { sign } from "../utils/jwt";

export const signUp = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { user_firstname, user_lastname, user_login, user_password } = req.body;


        if (user_firstname && user_lastname && user_login && user_password) {
            


            const userCreate = await connectionDB.getRepository(UsersEntity)
            .createQueryBuilder()
            .insert()
            .into(UsersEntity)
            .values({user_firstname, user_lastname, user_login, user_password})
            .returning(["*"])
            .execute();
            
            if ( userCreate) {
                res.status(200).json({
                    status:200,
                    message: "success",
                    data:  userCreate.raw
                })
            }
            
        }
    } catch (error) {
        console.log(error);
    }
};

export const signIn = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const  { user_login , user_password } = req.body;
        const foundedUser = await connectionDB.getRepository(UsersEntity)
        .createQueryBuilder("users")
        .where("users.user_login = :user_login AND users.user_password = :user_password" , {user_login, user_password})
        .getOne();


        if (foundedUser) {
            const token:string = sign(foundedUser.user_id);

            res.status(200).json({
                status: 200,
                message: "loge",
                data: {
                    id: foundedUser.user_id,
                    user_firstname: foundedUser.user_firstname,
                    user_lastname: foundedUser.user_lastname
                },
                token
            })
        }
        else {
            res.status(404).json({
                error: "this user is not exists"
            })
        }


    } catch (error) {
        console.log(error)
    }
}
