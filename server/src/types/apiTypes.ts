import { Response } from 'express';
import { User } from '../types/models';


export interface ResponseWithUser extends Response {
    userId?: string | null;
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