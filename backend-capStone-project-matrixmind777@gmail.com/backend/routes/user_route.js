const express= require('express');
const { getuserbyid } = require('../controllers/user_controoller');

const router= express.Router();


router.get('/getuserbyid/:id',getuserbyid);

module.exports=router;
