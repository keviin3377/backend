const express= require('express');
const routerApi= require('./routes');

const{logErrors, errorHandler,boomerrorHandler}=require('./middlewares/error.handler');
const app= express();
const port=3000;
//mostrar cuerpo del json por post
app.use(express.json())

//cierre de mostrar cuerpo jsonpor post
routerApi(app)

routerApi(app)

app.use(logErrors)
app.use(boomerrorHandler)
app.use(errorHandler)
app.listen(port,()=>{

  console.log('mi port'+port);
})

