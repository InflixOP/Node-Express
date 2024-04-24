import express from "express";
const app=express();
app.get("/",(req,res)=>{
    res.send("<h2>Hello,World<h2>");
});
app.get("/name",(req,res)=>{
    res.send("<h2>Anubhav<h2>");
}
);
app.listen(8000,() => {
    console.log("Server listening on port 8000");
});