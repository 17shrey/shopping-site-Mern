const escapeHTML = require("escape-html");
const express = require("express");
app = express();
const { off, nextTick } = require("process");
const fs = require("fs");
const multer = require("multer");
app.use(express.json())
Product = require('../model/product')



// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "D:\ifuture\React\images");
//     },
//     filename: (req, file, cb) => {
//         cb(null, `${file.originalname}`);
//     },
// });
// const upload = multer({ storage });

// app.post("/api/upload", upload.single("image"), (req, res) => {
//     res.send({ message: "Image uploaded successfully." });
// });






app.post("/product", async (req, res) => {
    var { name, description, price, imagepath, category, quantity } = req.body;
    console.log('product called');
    console.log(req.body);
    //remove fakepath string from imagepath
    // var imagepath =
    //     "images/" + req.body.imagepath.substring(12, req.body.imagepath.length);

    if (!name || !description || !price || !imagepath || !category || !quantity) {
        return res.status(422).json({ error: "Please fill all mandatory fields" });
    }

    try {
        const productExists = await Product.findOne({ name: name });
        if (productExists) {
            return res.status(422).json({ error: "Product entry already exists" });
        } else {
            const prod = new Product({ name, description, price, imagepath, category, quantity });
            await prod.save();

            return res.status(201).json({ success: "Product saved successfully" });
        }
    } catch (err) {
        console.log(err);
    }

    res.json({ message: req.body });
});





app.post("/productdelete", async (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res
            .status(422)
            .json({ error: "Please fill product name to delete." });
    }

    try {
        const isProdExist = await Product.findOne({ name: name });
        if (isProdExist) {
            await Product.findOneAndRemove({ name: isProdExist.name });
            return res.status(201).json({ success: "Product deleted successfully" });
        } else {
            return res.status(422).json({ error: "Product does not exist." });
        }
    } catch (err) {
        console.log(err);
    }
});

app.get("/products", async (req, res) => {
    res.json(await Product.find({}));
});

app.get("/productsBasedOnName/:category", async (req, res) => {
    const category = req.params.category;
    if (category == "All") {
        res.json(await Product.find({}));
    } else {
        res.json(await Product.find({ category: category }));
    }
});





module.exports = app;



