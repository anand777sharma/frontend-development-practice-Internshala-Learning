const express= require('express');
const {autheticate} = require('../middlewares/protectedRoute');
const { getallusers } = require('../controllers/user_controller');


const router= express.Router();

router.get('/profile',autheticate,(req,res)=>{

    res.send(req.user);//we will pass the user object to access
});
router.get('/getalluser',getallusers)

module.exports=router;
