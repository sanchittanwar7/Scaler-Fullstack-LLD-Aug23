const express = require('express')

const productController = require('../controllers/productsController')

const router = express.Router()

router.get('/products', productController.getAllProducts)
.get('/products/:pid', productController.getProduct)
.post('/products', productController.createProduct)
.delete('/products/:pid', productController.deleteProduct)
.put('/products', productController.replaceProduct)
.patch('/products', productController.updateProduct)
.get('/something', productController.doSomething)
// router.get('/', productController.getAllProducts)
// .get('/:pid', productController.getProduct)
// .post('/', productController.createProduct)
// .delete('/:pid', productController.deleteProduct)
// .put('/', productController.replaceProduct)
// .patch('/', productController.updateProduct)

exports.router = router