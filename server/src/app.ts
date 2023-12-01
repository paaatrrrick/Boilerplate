if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
import express, { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import mongoose from 'mongoose';
import AuthRouter from './routes/auth';


export default class Api {
    private port: number;
    private dbUrl: string;
    constructor(port: number, dbUrl: string) {
        this.port = port;
        this.dbUrl = dbUrl;
    }

    authRoutes = (): express.Router => AuthRouter;

    // githubRouter.post('/connect', isLoggedIn, catchAsync(async (req: Request, res: ResponseWithUser, next: NextFunction) => {


    error(): ErrorRequestHandler {
        return (err: Error, req: Request, res: Response, next: NextFunction) => {
            console.error(err);
            res.status(500).send({ error: err.message });
        }
    }


    start(): void {
        mongoose.set('strictQuery', true);
        mongoose.connect(this.dbUrl, {
            //@ts-ignore
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error:"));
        db.once("open", () => {
            console.log("🍌 Mongo connection successful");
        });


        const app = express();
        app.use(bodyParser.json(), bodyParser.urlencoded({ extended: false }))
        app.use(cors());
        app.use(cookieParser());
        app.use(`/auth`, this.authRoutes());
        app.use(this.error());

        let PORT: number | string = process.env.PORT;
        if (PORT == null || PORT == "") {
            PORT = this.port;
        }
        app.listen(PORT, () => {
            return console.log(`🥑 We're live: ${PORT}`);
        });
    }

}
