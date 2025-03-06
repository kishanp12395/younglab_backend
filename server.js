import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors'
import userRoute from './Routes/User.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors())

mongoose.connect(process.env.MONGODB_URI, {
    dbName: 'young_user'
})
    .then(() => console.log('Mongodb Connected'))
    .catch((err) => console.log(err))




app.use("/api/users", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
});