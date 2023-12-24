import express from 'express';
const app = express();
const PORT =5000;

app.get("/",(req, res) => {
    res.status(200).json({"message": "OK"});
})
app.listen(PORT,()=>{
console.log("server started");
});