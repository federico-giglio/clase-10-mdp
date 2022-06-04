// Importamos
const express = require('express');
const router = require('./router.js');
const app = express();
const { engine } = require("express-handlebars");
const productos = require('./contenedor')

// Settings
app.set ('port', process.env.PORT || 8080)

// Middlewares
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// HANDLEBARS SETTINGS
/*
app.set ('views', "./views" )
app.set ('view engine', "hbs" )
app.engine('.hbs', engine ({
    extname: ".hbs",
    defaultLayout: "index.hbs",
}));
*/

// PUG SETTINGS
/*
app.set('views', './views/pug')
app.set('view engine', 'pug')
*/

// EJS SETTINGS

app.set('view engine', 'ejs')


// Ruta
app.use("/api/productos", router)

// HANDLEBARS ruta
/*
app.get("/productos", (req, res) => {
    res.render("productList", {productos: productos.getAll()});
})
*/

// PUG ruta
/*
app.get("/productos", (req, res) => {
    res.render("productList", {productos: productos.getAll()});
})
*/

// EJS ruta

app.get("/productos", (req, res) => {
    res.render("ejs/pages/productList", {products: productos.getAll()})
})




// Server
app.listen(8080, () => {
    console.log(`Escuchando en puerto ${app.get('port')}`);
})
