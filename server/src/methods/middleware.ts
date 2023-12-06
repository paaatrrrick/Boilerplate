if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

import { firebaseAdmin } from "./firebase";
import { Request, NextFunction, Response } from 'express';
import { User } from '../types/models';
import MyUser from '../models/user';



const Authenticate =  async function (req: Request, res: Response, next: NextFunction) {
  try {
    const firebaseToken = req.headers.authorization?.split(" ")[1];    

    let firebaseUser;
    if (firebaseToken) {
      firebaseUser = await firebaseAdmin.auth().verifyIdToken(firebaseToken);
    }

    if (!firebaseUser) {
      // Unauthorized
      return res.status(401).send({error: "Sorry you are not authorized to access this"});
    }

    const user : User = await MyUser.findOne({firebaseId: firebaseUser.user_id});
    if (!user) {
      // Unauthorized
      return res.status(401).send({error: "Sorry you are not authorized to access this"});
    }

    req['user'] = user;

    next();
  } catch (err) {
    //Unauthorized
    return res.status(401).send({error: "Sorry you are not authorized to access this"});
  }
}



export { Authenticate };
