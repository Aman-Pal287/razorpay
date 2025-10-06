const productModel = require("../models/product.model");

async function createProduct(req, res) {
  const {
    image,
    title,
    description,
    price: { amount, currency },
    category,
  } = req.body;

  try {
    const product = await productModel.create({
      image,
      title,
      description,
      price: { amount, currency },
      category,
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong",
      error: err.message,
    });
  }
}

module.exports = { createProduct };
