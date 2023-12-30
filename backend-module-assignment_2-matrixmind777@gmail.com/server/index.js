const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const storage = require("node-persist");

const app = express();
app.use(cors());

//intialize storage
async function init(){
	await storage.init();
    console.log("Storage Initialized");
	await storage.clear();
    console.log('Storage cleared');
}
init()


jsonParser = bodyParser.json();
// adding todos to the storage
app.post("/todo", jsonParser, async (req, res) => {
    try {
        const { id,todo,des } = req.body;
        await storage.setItem(id, req.body);
        res.status(201).send("todo added Succesfully")
    } catch (error) {
        res.status(404).send(error);
    }
})
// retriving all todos
app.get("/todo", async(req,res)=>{
    try {
        const todos=await storage.values();
        res.status(200).send(todos);  
    } catch (error) {
        res.status(400).send(error);
    }
})


app.listen(5000, () => {
    console.log("server started succesfully")
})