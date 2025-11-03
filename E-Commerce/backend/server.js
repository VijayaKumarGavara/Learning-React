import express from "express";
import cors from "cors";
import fetch from "node-fetch";

import Task from "./Task.js";
import connectDb from "./config.js";
const app = express();

app.use(express.json());
app.use(cors());

connectDb();

app.get("/api/tasks", async (req, res) => {
  try{
    const response = await Task.find({})
    console.log(response);
    // const jsonData = await response.json();
    res.json(response);
  }catch(err){
    console.log(err);
  }
});
app.post("/api/tasks", async (req, res) => {
  try {
    const data = req.body;
    const newTask=await Task.create(data);
    
    res.status(201).json(newTask);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Failed to create new Task" });
  }
});

app.delete("/api/tasks",async (req, res) => {
    const id=req.body;
    try {
        const d=await Task.deleteOne({_id:id})

        res.status(201).json(d);
    } catch (error) {
        console.log(error.message);
    }
})
app.put("/api/tasks/:id", async(req,res)=>{
    const id=req.params.id;
    const update=req.body;
    update["updatedAt"]=new Date();
    const d=await Task.find({_id:id})
    console.log(d[0].__v);
    // console.log(update);
    update['__v']=d[0].__v+1;
    try{
        const info=await Task.findByIdAndUpdate(id, update);

        if(!info){
            res.status(404).json({error:'Task id not found to update'});
        }
        res.status(200).json(info);
    }catch(err){
        console.log(err);
    }
})
app.listen(4321,()=>{
    console.log("✅ Server running on http://localhost:4321")
});