import { Request } from 'express';
import { User } from '../types/models';


export interface RequestWithUser extends Request {
    user?: User;
}

export interface FirebaseConfigTypes {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}