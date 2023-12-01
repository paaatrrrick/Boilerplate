if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
import catchAsync from '../methods/catchAsync';
import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { isLoggedIn } from '../methods/middleware';
import users from '../models/user';
import { randomStringToHash24Bits } from '../methods/helpers';
import { ResponseWithUser } from '../types/apiTypes';

const AuthRouter = express.Router();
AuthRouter.get('/get', catchAsync(async (req: Request, res: ResponseWithUser, next: NextFunction) => {
    res.status(200).send({ user: "asdf" });
}));

AuthRouter.get('/isLoggedIn', isLoggedIn, catchAsync(async (req: Request, res: ResponseWithUser, next: NextFunction) => {
    res.status(200).send({ user: res.user });
}));

AuthRouter.post('/google', catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { idToken, email, profilePicture, name } = req.body;
    const uid = randomStringToHash24Bits(idToken);
    const user = await users.findById(uid);
    if (!user) {
        const newUser = new users({ _id: uid, email: email, name: name, profilePicture: profilePicture })
        await newUser.save();
    }
    const token = jwt.sign({ _id: uid, }, process.env.JWT_PRIVATE_KEY, { expiresIn: "1000d" });
    res.status(200).send({ token: token, message: 'Login successful' });
}));


export default AuthRouter;