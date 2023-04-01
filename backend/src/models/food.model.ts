import { Schema, model } from "mongoose";

export interface food{
    
        id:string;
        name:string;
        price:number;
        tags:string[];
        favorite:boolean;
        stars:number;
        imageUrl:String;
        origins:string[];
        cookTime:string;
      
      
      
      
}
export const foodSchema=new Schema<food>({

    name:{type:String,required:true},
    price:{type:Number,required:true},
    tags:{type:[String]},
    favorite:{type:Boolean,required:false},
    stars:{type:Number,required:true},
    imageUrl:{type:String,required:true},
    origins:{type:[String],required:true},
    cookTime:{type:String,required:true},

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

export const foodModel=model<food>('food',foodSchema);