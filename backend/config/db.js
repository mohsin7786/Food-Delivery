import mongoose from "mongoose";

export const  connectDB = async () =>{


    await mongoose.connect('mongodb+srv://mohsinali:mohsin7786@food-del.2k7as.mongodb.net/food-del?retryWrites=true&w=majority&appName=food-del').then(()=>console.log("DB Connected"));
   
}
