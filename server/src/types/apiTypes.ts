import { Request } from 'express';
import { UserType } from '../types/models';


export interface RequestWithUser extends Request {
    user?: UserType;
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