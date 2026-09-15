const express=require("express");
const app=express();
const dotenv=require("dotenv");
const PORT=3000;
dotenv.config();
const PORT=process.env.port||3000;
const PORT=process.env.PORT;
app.listen(PORT,()=>{
console.log(`app is running on port ${PORT}`);
});

app.get("/",(req,res)=>{
    res.json({message:"hello"});
})
app.listen(PORT,()=>{
console.log(`app is running on port ${PORT}`);
});

const express = require("express");
const app=express();
const PORT=3000;
app.get("/",(req,res)=>
    {
    res.json({message:"hello"});
});
app.listen(PORT,()=>
{
    console.log(`app is running on port ${PORT}`);
}
);