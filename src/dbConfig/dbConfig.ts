import mongoose from "mongoose";

export async function connect(){
    try {
        mongoose.connect(process.env.MONGO_URL!)        
        const connection = mongoose.connection

        connection.on('connected',()=>{
            console.log('MongoDB connected');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error, check your DB configuration: ' + err);
            process.exit()
        })

    } catch (error) {
        console.log('Sometging went wrong to DB');
        console.log(error);
    }
}