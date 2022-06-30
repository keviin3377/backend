function logErrors(err, req,res,next){

console.log('logErrors')
console.log(err)
next(err)

}//logear errores

function errorHandler(err, req,res,next){
console.log('errorHandler')
  res.status(500).json({
    message: err.message,
    stack: err.stack,
})

  }// forma o cuerpo de estandar de errores



  function boomerrorHandler(err, req,res,next){
    if(err.isBoom){

const {output}=err
res.status(output.statusCode).json(output.payload)

    }

next(err)

  }

module.exports={logErrors, errorHandler,boomerrorHandler}