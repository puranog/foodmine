import {Router} from 'express'
import { sample_users} from '../src/data'
import jwt from "jsonwebtoken"
import asyncHandler from 'express-async-handler'
import { UserModel } from '../src/models/user.model';
const routerUser=Router();

routerUser.get("/api/users/seed", asyncHandler(
  async (req, res) => {
     const usersCount = await UserModel.countDocuments();
     if(usersCount> 0){
       res.send("Seed is already done!");
       return;
     }
 
     await UserModel.create(sample_users);
     res.send("Seed Is Done!");
 }
 ))

routerUser.post("/api/user/login",asyncHandler(
  async  (req, res) => {
    const {email,password}=req.body;
    const user = UserModel.findOne({email,password});
    
  
     if(user) {
      res.send(generateTokenReponse(user));
     }
     else{
       const BAD_REQUEST = 400;
       res.status(BAD_REQUEST).send("Username or password is invalid!");
     }
  
  }
))
  
  const generateTokenReponse = (user : any) => {
    const token = jwt.sign({
      email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
      expiresIn:"30d"
    });
  
    user.token = token;
    return user;
  }
  
  export  default routerUser;