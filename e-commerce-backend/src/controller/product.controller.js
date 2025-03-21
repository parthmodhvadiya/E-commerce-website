const productService = require("../services/product.services");

const createProduct = async (req, res) => {
  try {
    const product = await productService.createProduct(req.body);
    return res.status(201).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    await productService.deleteProduct(productId);
    return res
      .status(200)
      .send({ message: "Your Product deleted successfully" });
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const updateProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.updateProduct(productId, req.body);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const findProductById = async (req, res) => {
  const productId = req.params.id;
  try {
    const product = await productService.findProductById(productId);
    return res.status(200).send(product);
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};


const getAllProducts = async (req,res)=>
{
    try{
        const products = await productService.getAllProducts(req.query);
        return res.status(200).send(products);
    }
    catch(error){
        return res.status(500).send({error:error.message});
    }
}

const createMultipleProduct = async(req,res)=>
{
    try {
        const product = await productService.createMultipleProduct(productId);
        return res.status(200).send(product);
    } catch (error) {
        return res.status(500).send({error:error.message});
    }
}

module.exports= {
    createMultipleProduct,
    getAllProducts,
    deleteProduct,
    updateProduct,
    createProduct,
    findProductById
}
