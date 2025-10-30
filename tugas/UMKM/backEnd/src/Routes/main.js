const express = require('express')
const { getAllProducts, getUpdatedProduct, DeleteProduct,createProduct} = require('../Controllers/controllerProduct')
const router = express.Router()


router.get('/products', getAllProducts)
router.put('/products/:id', getUpdatedProduct)
router.delete('/products/:id', DeleteProduct)
router.post('/products', createProduct)
module.exports = router