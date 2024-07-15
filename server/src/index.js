import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors({
    origin:["https://vercel.com/esha-lals-projects/recipe-app-mern2/618XZuU2febx1m3p9hrisF2mvu6J"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://eshalal9693:recipeapp2127@recipes.lrokmsi.mongodb.net/recipes?retryWrites=true&w=majority&appName=recipes",
  // {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // }
);

app.listen(3001, () => console.log("Server started"));
