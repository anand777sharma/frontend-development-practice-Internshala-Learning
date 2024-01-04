const express= require('express');
const { getAllProduct, getProductById, addProduct, updateProduct, deleteProduct }
 = require('../controllers/user_controller');

const router= express.Router();

router.get('/',getAllProduct);
router.get('/:id',getProductById);
router.post('/',addProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct);

module.exports= router;