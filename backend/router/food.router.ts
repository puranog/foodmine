import {Router} from 'express'
import {sample_foods,sample_tags} from '../src/data'
import asyncHandler from 'express-async-handler';
import { foodModel } from '../src/models/food.model';
import { model } from 'mongoose';
const router=Router();

router.get("/api/foods/seed", asyncHandler(
  async (req, res) => {
     const foodsCount = await foodModel.countDocuments();
     if(foodsCount> 0){
       res.send("Seed is already done!");
       return;
     }
 
     await foodModel.create(sample_foods);
     res.send("Seed Is Done!");
 }
 ))

router.get("/api/foods",asyncHandler(
  async (req, res) => {
  const foods=await foodModel.find();
  res.send(foods);
}))

router.get("/api/foods/search/:searchTerm",asyncHandler(
  async (req, res) => {
    const searchRegex=new RegExp(req.params.searchTerm,'i')
    const searchTerm  = req.params.searchTerm;
    const foods=await foodModel.find({name:{$regex:searchRegex}})
    res.send(foods);
  }
))

router.get("/api/foods/tags",asyncHandler(
  async (req, res) => {
    const tags = await foodModel.aggregate([
      {
        $unwind:'$tags'
      },
      {
        $group:{
          _id: '$tags',
          count: {$sum: 1}
        }
      },
      {
        $project:{
          _id: 0,
          name:'$_id',
          count: '$count'
        }
      }
    ]).sort({count: -1});

    const all = {
      name : 'All',
      count: await foodModel.countDocuments()
    }

    tags.unshift(all);
    res.send(tags);
  }
)
  
)

router.get("/api/foods/tag/:tagName", asyncHandler(
  async (req, res) => {
    const foods = await foodModel.find({tags: req.params.tagName})
    res.send(foods);
  }
))

router.get("/api/foods/:foodId",asyncHandler(
  async (req, res) => {
    const food=await foodModel.findById(req.params.foodId)
    res.send(food);
  }
))

export default router;