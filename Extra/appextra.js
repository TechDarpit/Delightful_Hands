const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

app.use(express.json());
app.use(express.static('./Assets'));
app.use(express.urlencoded({ extended: true }));

let products = require('./ProductData.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/index.html'));
})

// read Opration
// retrive all products
app.get('/api/products',(req, res ) => {
    res.send(products);
});

// retrive single product 
app.get('/api/products/:id',(req, res ) => {
    
    let id = parseInt(req.params.id);
    let product = products.find((pro) => pro.P_id === id);
    if(!product){
        res.status(404).send("Product Not Found...");
        return;
    }
    res.send(product);
});

// Create Opration
// add new product
app.post('/api/products',(req, res ) => {

    const product = {
        "P_id": products.reduce((pre,curr) => {
            return (pre.P_id < curr.P_id) ? curr : pre;
        }).P_id + 1,
        "P_Name":req.body.P_Name,
        "P_Image":req.body.P_Image,
        "P_Price":req.body.P_Price,
        "P_Description":req.body.P_Description,
        "P_Category":req.body.P_Category
    };
    // console.log(req.body);
    // console.log(req.body.P_Name);

    products.push(product);
    res.send("Product Added Successfully...");
    // res.send(req.body);

});

// Update Operation
// edit/update product
app.put('/api/products/:id',(req, res ) => {
    let id = parseInt(req.params.id);
    let product = products.find((pro) => pro.P_id === id);
    if(!product){
        res.status(404).send("Product Not Found...");
        return;
    }
    product.P_Name = req.body.P_Name,
    product.P_Image = req.body.P_Image,
    product.P_Price = req.body.P_Price,
    product.P_Description = req.body.P_Description,
    product.P_Category = req.body.P_Category

    res.send("Product Updated Successfully...");

});

// Delete Operation
// delete a product
app.delete('/api/products/:id',(req, res ) => {
    
    let id = parseInt(req.params.id);
    let product = products.find((pro) => pro.P_id === id);
    if(!product){
        res.status(404).send("Product Not Found...");
        return;
    }

    let idx = products.indexOf(product);
    products.splice(idx,1);

    res.send("Product Deleted Successfully...");

});

app.listen(port, ()=> {
    console.log(`Express API is li stening to http://localhost:${port}.`);
});