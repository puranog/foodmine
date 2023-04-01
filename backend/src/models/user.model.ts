import { Schema, model } from "mongoose";

export interface user{
    id:string;
    email:string;
    password:string;
    name:string;
    address:string;
    isAdmin:boolean;
}
export const userSchema=new Schema<user>({

  name:{type:String,required:true},
  email:{type:String,required:true},
  password:{type:String,required:true},
  address:{type:String,required:true},
  isAdmin:{type:Boolean,required:true}


},
{
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },timestamps:true
}
);
export const UserModel=model<user>('user',userSchema);