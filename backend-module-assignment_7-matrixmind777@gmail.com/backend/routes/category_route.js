const express= require('express');
const { getAllCategory, getCategoryById, addCategory, updateCategory, deleteCategory }
 = require('../controllers/user_controller');

const router= express.Router();

router.get('/',getAllCategory);
router.get('/:id',getCategoryById);
router.post('/',addCategory);
router.put('/:id',updateCategory);
router.delete('/:id',deleteCategory);

module.exports= router;