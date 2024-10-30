import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect("mongodb://localhost:27017/",
    );
    console.log(
      `\n MongoDB connected!! DB HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log("MongoDB connection Error ", error);
    process.exit(1);
  }
};

export { connectDB };