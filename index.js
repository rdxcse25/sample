//L3

// const fs = require('fs')

// const index = fs.readFileSync('index.html','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products

// const express = require('express')
// const morgan = require('morgan')
// const server = express()

// //middlewares

// //Built-in middleware
// server.use(express.json())//body parser
// //server.use(express.urlencoded())

// //third-party middleware
// server.use(morgan('dev'))

// server.use(express.static('public'))

// //application middleware
// // server.use((req,res,next)=>{
// //     console.log(req.method,req.ip,req.hostname,new Date(), req.get('User-Agent'))
// //     next()
// // })

// const auth = (req,res,next)=>{
//     // console.log(req.query)
//     if(req.body.password=='123'){
//         next()
//     }
//     else{
//         res.sendStatus(401)
//     }
// }

// // server.use(auth)

// //API-Endpoints-Routes

//               //Router-level middleware
// server.get('/',auth,(req,res)=>{
//     res.json({type:'GET'})
// })

// server.post('/',auth,(req,res)=>{
//     res.json({type:'POST'})
// })
// server.put('/',(req,res)=>{
//     res.json({type:'PUT'})
// })
// server.delete('/',(req,res)=>{
//     res.json({type:'DELETE'})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'})
// })

// // server.get('/',(req,res)=>{
// //     // res.send('<h1>hello</h1>')
// //     // res.sendFile('C:/Users/DELL/OneDrive/Desktop/node_app_L3/index.html')
// //     // res.json(products)
// //     // res.sendStatus(404)
// // })

// server.listen(8080,()=>{
//     console.log('server started')
// })

//L4 - REST API

// const fs = require('fs')

// const index = fs.readFileSync('index.html','utf-8')
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'))
// const products = data.products

// const express = require('express')
// const morgan = require('morgan')
// const server = express()

// //middlewares

// //Built-in middleware
// server.use(express.json())//body parser
// //third-party middleware
// server.use(morgan('dev'))
// server.use(express.static('public'))

// //API-Endpoints-Routes
// //products->resource

// const createProduct = (req,res)=>{
//     console.log(req.body);
//     products.push(req.body);
//     res.status(201).json(req.body);
// }

// const getAllProducts = (req,res)=>{
//     res.json(products)
// }

// const getProduct = (req,res)=>{
//     const id = +req.params.id
//     const product = products.find(p=>p.id===id)
//     res.json(product)
// }

// const replaceProduct = (req,res)=>{
//     const id = +req.params.id
//     const productIndex = products.findIndex(p=>p.id===id)
//     products.splice(productIndex,1,{...req.body,id:id})
//     res.status(201).json()
// }

// const updateProduct = (req,res)=>{
//     const id = +req.params.id
//     const productIndex = products.findIndex(p=>p.id===id)
//     const product = products[productIndex]
//     products.splice(productIndex,1,{...product,...req.body})
//     res.status(201).json()
// }

// const deleteProduct = (req,res)=>{
//     const id = +req.params.id
//     const productIndex = products.findIndex(p=>p.id===id)
//     const product = products[productIndex]
//     products.splice(productIndex,1)
//     res.status(201).json(product)
// }

// //C R U D

// //CREATE API
// server.post('/products',createProduct);

// //READ
// //GET/products
// server.get('/products',getAllProducts);
// //GET/products/:parameters
// server.get('/products/:id',getProduct);

// //UPDATE
// //PUT/products/:id
// server.put('/products/:id',replaceProduct);

// //PATCH/products/:id
// server.patch('/products/:id',updateProduct);

// //delete DELETE
// server.delete('/products/:id',deleteProduct);

// // server.delete('/',(req,res)=>{
// //     res.json({type:'DELETE'})
// // })
// // server.patch('/',(req,res)=>{
// //     res.json({type:'PATCH'})
// // })

// // server.get('/',(req,res)=>{
// //     // res.send('<h1>hello</h1>')
// //     // res.sendFile('C:/Users/DELL/OneDrive/Desktop/node_app_L3/index.html')
// //     // res.json(products)
// //     // res.sendStatus(404)
// // })

// server.listen(8080,()=>{
//     console.log('server started')
// })









//lecture 5, 6, 7
//MODEL VIEW CONTROLLER & FILE STRUCTURE
require('dotenv').config()
const express = require("express");
const morgan = require("morgan");
const mongoose = require('mongoose');
const server = express();
const productRouter = require('./routes/product')
const userRouter = require('./routes/user')
// const { Schema } = mongoose;


console.log('env',process.env.DB_PASSWORD);


// JF*uR@Hf3h*f9WD
//DffmNlCNLhvsFZsA -- db password





// const productController = require("./controller/product");
// const productRouter = express.Router();

//middlewares

//Built-in middleware
server.use(express.json()); //body parser
//third-party middleware
server.use(morgan('dev'));
server.use(express.static(process.env.PUBLIC_DIR));
server.use('/products',productRouter.router);
server.use('/user',userRouter.router);




//db connection mongoose
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('Database Connected')
}




// const productSchema = new Schema({
//   title: String,
//   description: String,
//   price: Number,
//   discountPercentage: Number,
//   rating: Number,
//   brand: String,
//   category: String,
//   thumbnail: String,
//   images: [ String ]
// });


// const Product = mongoose.model('Product', productSchema);



//API-Endpoints-Routes
//products->resource

//MVC model-view-controller



// productRouter
//   .post("/products", productController.createProduct)
//   .get("/products", productController.getAllProducts)
//   .get("/products/:id", productController.getProduct)
//   .put("/products/:id", productController.replaceProduct)
//   .patch("/products/:id", productController.updateProduct)
//   .delete("/products/:id", productController.deleteProduct);




//C R U D

// //CREATE API
// server
//   .post("/products", productController.createProduct);

// //READ
// //GET/products
// server.get("/products", productController.getAllProducts);
// //GET/products/:parameters
// server.get("/products/:id", productController.getProduct);

// //UPDATE
// //PUT/products/:id
// server.put("/products/:id", productController.replaceProduct);

// //PATCH/products/:id
// server.patch("/products/:id", productController.updateProduct);

// //delete DELETE
// server.delete("/products/:id", productController.deleteProduct);




// server.delete('/',(req,res)=>{
//     res.json({type:'DELETE'})
// })
// server.patch('/',(req,res)=>{
//     res.json({type:'PATCH'})
// })

// server.get('/',(req,res)=>{
//     // res.send('<h1>hello</h1>')
//     // res.sendFile('C:/Users/DELL/OneDrive/Desktop/node_app_L3/index.html')
//     // res.json(products)
//     // res.sendStatus(404)
// })

server.listen(process.env.PORT, () => {
  console.log("server started");
});
