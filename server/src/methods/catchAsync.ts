import { Request, NextFunction } from 'express';
import { ResponseWithUser } from '../types/apiTypes';

const catchAsync = func => {
    return (req: Request, res: ResponseWithUser, next: NextFunction) => {
        func(req, res, next).catch(next);
    }
}

export default catchAsync;
