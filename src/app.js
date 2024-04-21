const express = require ("express") //llamo a express
const app = express()
const PORT = 8080 //declaro el puerto
//app.use(express.urlencoded({extend:true})) //no hay que olvidarse de esta linea
const ProductManager = require("./productManager.js")

app.get('/products', async (req,res)=>{ //debe leer el archivo de productos.json y devolverlos dentro de un objeto
    const productManager = new ProductManager()
    try {
        const products = await productManager.getProducts()
        res.json(products)
    } catch (error) {
        console.error("Error al obtener los productos:", error)
        res.status(500).send("Error interno del servidor")
    }
})
    
    //res.send("hols")
    //res.send(JSON.parse(products.json))


app.get('/products/:pid', async (req, res) => {  // debe recibir por params el id y devolver solo el producto solicitado
    const productManager = new ProductManager()
    try {
        const id = parseInt(req.params.pid)
        const product = await productManager.getProductById(id)
        res.json(product)
    } catch (error) {
        console.error("Error al obtener los productos:", error)
        res.status(500).send("Error interno del servidor")
    }
})


app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
}) //con  estas lineas de codigo 1 2 3 y app.listen eñ a levanto un servidor en express