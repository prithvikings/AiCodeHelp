const express=require('express');
const app=express();
const dotenv=require('dotenv');
const aiRoutes=require('./routes/ai.routes');

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({extended:true}));   
app.use('/ai',aiRoutes);

module.exports=app;