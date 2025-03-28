const express = require("express");
const app = express();
const path = require("path");
const { products } = require("./data");

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/v1/test", (req, res) => {
    res.json({ message: "It worked!" });
});

app.get("/api/v1/products", (req, res) => {
    res.json(products);
});

app.get("/api/v1/products/:productID", (req, res) => {
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);

    if (!product) {
        return res.status(404).json({ message: "That product was not found." });
    }

    res.json(product);
});

app.get("/api/v1/query", (req, res) => {
    let { search, limit, maxPrice } = req.query;
    let filteredProducts = products;

    if (search) {
        filteredProducts = filteredProducts.filter((product) =>
            product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (maxPrice) {
        const priceLimit = parseFloat(maxPrice);
        if (!isNaN(priceLimit)) {
            filteredProducts = filteredProducts.filter((product) =>
                product.price < priceLimit
            );
        } else {
            return res.status(400).json({ message: "Invalid price value." });
        }
    }

    if (limit) {
        limit = parseInt(limit, 10);
        filteredProducts = filteredProducts.slice(0, limit);
    }

    res.json(filteredProducts);
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>404 - Page Not Found</h1>");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
