const express= require('express');
const productosRouter=require('./productos.router')



function routerApi(app){

// mejora de rutas de endpoints

const router= express.Router();
app.use('api/v1', router)
app.use('/productos',productosRouter)




}
module.exports=routerApi
