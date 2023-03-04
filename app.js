import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { taskRouter } from './src/routes/task.route.js';

dotenv.config()

const app = express();


mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', ()=> console.log('Database connected'))


app.use(morgan("dev"));
app.use(express.json());


app.use('/task', taskRouter)
app.get('/', (req,res)=>{
    res.send('Hello world')
})

const port = process.env.PORT;

app.listen(port, ()=>{
    console.log(`your application running on http://localhost/${port}`)
})

