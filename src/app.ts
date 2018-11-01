import express from "express";
import logger from "morgan";
import mongoose from "mongoose";
import * as bodyParser from "body-parser";


class App {
    public express: express.Application;

    constructor() {
        require('dotenv').config();
        this.express = express();
        this.middleware();
        this.database();
    }

    public middleware(): void {
        this.express.use(logger("dev"));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    public database() {
        const mongoUri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

        const connectionOptions = {
            user: process.env.DB_USER,
            pass: process.env.DB_PWD,
            ssl: false
        };

        if (!process.env.DB_USER)
            delete connectionOptions.user;

        if (!process.env.DB_PWD)
            delete connectionOptions.pass;

        (<any>mongoose.Promise) = global.Promise;

        // mongoose.connect(mongoUri, connectionOptions)
        mongoose.connect(mongoUri, { useNewUrlParser: true })
            .then(() => {
                console.log(`Connected to MongoDB database ${process.env.DB_NAME}@${process.env.DB_HOST}:${process.env.DB_PORT}`);
            })
            .catch(err => {
                console.log(err);
            });
    }
}

export default new App().express;