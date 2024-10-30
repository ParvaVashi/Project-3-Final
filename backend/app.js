const express = require('express');
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

const app = express();
const port = process.env.PORT||3177;

dotenv.config();  // Load environment variables

console.log("JWT_SECRET:", process.env.JWT_SECRET);  

app.use(cookieParser());
app.use(express.json());
app.use(
    cors({
        origin: [
            "http://localhost:3000", // Make sure this is correct
        ],
        credentials: true,
    })
);


// MongoDB Atlas connection
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, { 
	useNewUrlParser: true, 
	useUnifiedTopology: true 
}, (err) => {
	console.log(err ? err : "Connected successfully to MongoDB Atlas");
});

app.use("/auth", require("./routers/authRouter"));
app.use("/user", require("./routers/userRouter"));
app.use("/bank", require("./routers/bankRouter"));
app.use("/camps", require("./routers/campRouter"));

app.listen(port, () =>
	console.log(`Server running at http://localhost:${port}`)
);
