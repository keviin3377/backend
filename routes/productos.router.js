const express = require('express');
const Productosservice = require('./../services/producto.services');
const validatorHandler = require('./../middlewares/validator.handler');
const {createProductoSchema,updateProductoSchema,getProductoSchema} = require('./../schemas/productos.schema');

const router = express.Router();
const service = new Productosservice();

router.get('/', async (req, res) => {
  const productos = await service.find();
  res.json(productos);
})

router.get('/:id', validatorHandler(getProductoSchema,'params'), async (req, res, next) => {
  try {
    const { id } = req.params;
    const productos = await service.findOne(id);
    res.json(productos);
  } catch (error) {
    next(error);
  }
})

router.post('/',
validatorHandler(createProductoSchema, 'body'),
async (req, res) => {
  const body = req.body;
  const newProducto = await service.create(body);
  res.status(201).json(newProducto);
})

router.patch('/:id',
validatorHandler(getProductoSchema,'parmas'),
validatorHandler(updateProductoSchema,'body'),
async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const productos = await service.update(id, body);
    res.json(productos);
  } catch (error) {
    next(error);
  }
})


router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
})

module.exports = router;