const express= require('express');
const { autheticate } = require('../middleware/ProtectedRoute');
const { createtweet,getalltweet } = require('../controllers/tweet_controller');

const router= express.Router();

router.post('/createtweet',autheticate,createtweet);
router.get('/getalltweet',getalltweet);
// router.get('/gettweetbyid/:id',gettweetbyid);

module.exports=router;
