const fs = require("fs");
const express = require("express");
const path = require("path");
const router = express.Router();

const allProducts = require("../data/products.json");

// Define a route to serve static images
const assetsPath = path.join(__dirname, "../assets");
router.use("/assets", express.static(assetsPath));

router.route("/getProducts").get((req, res) => {
	res.status(200).json({ message: "Get all contacts" });
});
router.route("/getProducts/:id").get((req, res) => {
	const pageId = parseInt(req.params.id);
	const itemsPerPage = 50;
	console.log(pageId);
	const baseUrl = req.protocol + "://" + req.get("host");

	const productsWithImages = allProducts.map((product) => ({
		...product,
		id: pageId * itemsPerPage + product.id,
		image: baseUrl + product.image,
	}));

	res.status(200).json(productsWithImages);
});
module.exports = router;
