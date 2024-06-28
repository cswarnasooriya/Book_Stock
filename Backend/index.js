import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'


import bookRoute from './route/book.route.js';
import userRoute from './route/user.route.js';




const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();


const PORT = process.env.PORT || 4008;
const URI = process.env.MongoDBURI;

//connect to DB

try{
    mongoose.connect(URI, {
        // useNewUrlParser: true,
        // useUnifiedTopology: true

    });
    console.log("Connected to MongoBD!");


}catch (error) {
    console.log("Error : " , error);
}

app.get("/" , (req,res)=>{
    res.send("Hello developers");
});


//define routes

app.use("/book", bookRoute);
app.use("/user", userRoute);



app.listen(PORT, ()=> {
    console.log(`App is running on port ${PORT}`);
}); 