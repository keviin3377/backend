// responsabilidades unicas
const express= require('express');
const faker= require('faker');


const router = express.Router()


 //query param
router.get('/',(req,res)=>{

  const usuarios=[]
  const {size}=req.query
  const limit= size || 10


  for (let index = 0; index <limit; index++) {

    usuarios.push({

      nombre: faker.commerce.productName(),
     apellido:faker.commerce.productName(),
      imagen: faker.image.imageUrl(),
    })

  }



      res.json(usuarios);

      })

  // ejecucion http://localhost:7000/usuarios?size=10
  //endpoint get


  //filter
  router.get('/filter',(req,res)=>{


    res.send('soy un filter de usuarios')


    })
    //cierre endpoint get filter



// genera id a un producto


router.get('/:documento',(req,res)=>{

  const {documento} = req.params

res.json({
documento,
  nombre:'Daniel David ',
  apellidos:'albarracin yepes'

})

})

//cierre de genera id a un producto


module.exports = router
