import express from 'express';
import cors from 'cors';//Connect / Express middleware
import bodyParser from 'body-parser';
import muralRouter from './routes/user'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(muralRouter);


app.listen(5000, ()=>{
  console.log("Server is Running")
});

