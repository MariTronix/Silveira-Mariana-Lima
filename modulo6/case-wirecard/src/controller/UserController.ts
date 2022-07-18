import { Request, Response } from 'express';
import { UserBussiness } from './../bussiness/UserBussiness';


const userBussiness = new UserBussiness();

export class UserController {
    signup = async (req: Request, res: Response) => {
        try {
            const { name, email, cpf, password } = req.body;
            const response = await userBussiness.sing(name, email, cpf, password)
            res.status(201).send("User successfully created");
        } catch(error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        }   
    }

    login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body
            const response = await userBussiness.login(email, password)
            res.status(200).send(`Token: ${response}`)
        } catch(error: any) {
            res.status(400).send(error.sqlMessage || error.message);
        }   
    }
}