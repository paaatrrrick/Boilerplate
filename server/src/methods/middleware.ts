if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
import { Request, NextFunction } from 'express';
import { ResponseWithUser } from '../types/apiTypes';
import { User } from '../types/models';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { constants } from '../constants';
import users from '../models/user';


async function isLoggedIn(req: Request, res: ResponseWithUser, next: NextFunction) {
    //check if req.headers
    let token: string | string[] = req.headers[constants.authHeader];
    if (Array.isArray(token)) {
        token = token[0];
    }
    //check if token exists or is null in an if statement
    if (!token || token === "" || token === undefined || token === null || token === "null") {
        return res.status(401).send(JSON.stringify("no user found"));
    } else {
        try {
            //@ts-ignore
            let decoded: JwtPayload = jwt.verify(token, process.env.JWT_PRIVATE_KEY);

            const user: User = await users.findById(decoded._id);
            if (!user) {
                return res.status(401).send(JSON.stringify("no user found"));
            }
            res.userId = decoded._id;
            res.user = user;
        } catch (e) {
            return res.status(500).send(JSON.stringify("no user found"));
        }
    }
    next();
    // res.redirect('/login');
}



export { isLoggedIn };
