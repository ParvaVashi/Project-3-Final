import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const connectDB = async () => {
  try {
    // Use the MONGO_URI environment variable or fallback to a default URI
    const mongoURI = process.env.MONGO_URI || "mongodb+srv://22cs090:Parva%400811@bloodsynergy.4ipcw.mongodb.net/";

    const connectionInstance = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connected! DB HOST: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if connection fails
  }
};

export { connectDB };
