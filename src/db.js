import mongoose from "mongoose";

export const connectDB = async ()=>{
    try{
        const url ='mongodb+srv://AlejandraSoto:AlejandraSoto19@cluster0.ciwjvmc.mongodb.net/?retryWrites=true&w=majority'
        //const url ='mongodb://127.0.0.1/sistema'
        await mongoose.connect(url)
        console.log('Base de datos conectada');
    } catch(error) {
        console.log(error);
    }
}