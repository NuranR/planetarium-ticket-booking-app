import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user-routes";
import adminRouter from "./routes/admin-routes";
import movieRouter from "./routes/movie-routes";
import bookingRouter from "./routes/booking-routes";
import cors from "cors";
dotenv.config();

const app = express();

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));

//middlewares
app.use(express.json());
app.use(cors());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingRouter);


mongoose
.connect(`mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@cluster0.9zucsis.mongodb.net/?retryWrites=true&w=majority`
)
.then(()=> 
app.listen(5000,()=>
    console.log("Connected to Database and Server is running")
))
.catch((e) => console.log(e));
