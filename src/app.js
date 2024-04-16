const express = require ("express") //llamo a express
const app = express()
const PORT = 8080 //declaro el puerto
//app.use(express.urlencoded({extend:true})) //no hay que olvidarse de esta linea
const ProductManager = require("./productManager.js")

app.get('/products', (req,res)=>{ //debe leer el archivo de productos.json y devolverlos dentro de un objeto
    
    res.send(JSON.parse(products.json))
})

app.get('/products/:pid', (req, res) => {  // debe recibir por params el id y devolver solo el producto solicitado

})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
}) //con  estas lineas de codigo 1 2 3 y app.listen eñ a levanto un servidor en express