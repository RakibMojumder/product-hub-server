const Product = require('../models/product.model');

module.exports.getAllProducts = async (req, res) => {
    try {
        const query = req.query;
        const filter = [];
        let sort = 'name';
        if (query.sort) {
            sort = query.sort
        }

        if (query.category) filter.push({ category: { $in: query.category.split(',') } })

        const priceFilter = [
            { price: { $gte: parseInt(query.min) } },
            { price: { $lte: parseInt(query.max) } },
        ]

        let products;
        let totalProducts;
        if (filter.length > 0) {
            totalProducts = await Product.find({ $and: priceFilter, $and: filter })
            products = await Product.find({ $and: priceFilter, $and: filter }).sort(sort).skip(parseInt(query.page * 8)).limit(8)
        } else {
            totalProducts = await Product.find({ $and: priceFilter })
            products = await Product.find({ $and: priceFilter }).sort(sort).skip(parseInt(query.page * 8)).limit(8)
        }

        res.json({
            success: true,
            msg: 'Successfully got products',
            totalProducts: totalProducts.length,
            data: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            msg: 'Could not get products',
            error: error.message
        })
    }
}