import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  priority: { type: String, enum: ["High", "Medium", "Low"], default: "High" },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  date: { type: String, default:new Date().toISOString().split('T')[0]}, // "YYYY-MM-DD"
  isCompleted:{type:Boolean, default:false, required:true},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

export default mongoose.model("Task", taskSchema);
