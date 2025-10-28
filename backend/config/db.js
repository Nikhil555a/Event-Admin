import mongoose from "mongoose"


const connectDB = async()=>{
    try {
      mongoose.connect(process.env.MONGO_URL)
      console.log("MongoDB Connected")  
    } catch (error) {
        console.log("MongoDB Not Connected")
        
    }
}
export default connectDB