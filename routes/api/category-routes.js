const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const data = await Category.findAll({
            include: [{ model: Product}]
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        const data = await Category.findByPk(req.params.id, {
            include: [{ model: Product}]
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
});

router.post('/', (req, res) => {
    // create a new category
    try {
      
    } catch (error) {
        
    }
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    try {
      
    } catch (error) {
        
    }
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    try {
      
    } catch (error) {
        
    }
});

module.exports = router;
