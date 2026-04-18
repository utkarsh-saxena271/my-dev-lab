import mongoose from 'mongoose';

const connectDB = async() =>{
    try {
        await mongoose.connect(process.env.MONGOURI as unknown as string)
    } catch (error) {
        process.exit(1)
    }
}