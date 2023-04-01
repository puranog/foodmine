import dotenv from 'dotenv';
dotenv.config();


import express, { json } from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import userRouter from '../router/user.router'
import foodRouter from '../router/food.router'
import { dbConnect } from './configs/database.config';

dbConnect();

const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));

app.use("/",foodRouter);
app.use("/",userRouter)


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})