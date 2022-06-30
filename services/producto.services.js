const faker = require('faker');
const boom=require('@hapi/boom');

class Productosservice{
  constructor() {
    this.productos = [];
    this.generate();
  }
  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.productos.push({
        id:faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        description: faker.lorem.sentence(),
        categories: [faker.commerce.department()],
        image: faker.image.imageUrl(),
        isBlock:faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
const newProduct={
  id:faker.datatype.uuid(),
  ...data
}
this.productos.push(newProduct);
return newProduct;
  };

  async find() {
    return this.productos;
  }

  async findOne(id) {
    const index = this.productos.find(item => item.id === id);
    if (!index) {
      throw boom.notFound('Product not found');
    }
    return index;
  }

  async update(id,changes){ const index= this.productos.findIndex(item=> item.id===id)
    if (index=== -1){
    throw boom.notFound('producto no encontrado')
    }
    const productos=this.productos[index]
    this.productos[index]={
      ...productos,
      ...changes
    }
    return this.productos[index]
    }

    async delete(id){ const index= this.productos.findIndex(item=> item.id===id)
    if (index=== -1){
     throw boom.notFound('producto no encontrado')
   }
    this.productos.splice(index,1)
     this.productos[index]
      return {id}
    }
    }

module.exports=Productosservice