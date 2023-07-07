const router = require('express').Router()
const {
    getAllRecipe,
    getRecipeById,
    createRecipe,
    deleteRecipeById,
    updateRecipeById
} = require('../controllers/recipe')

//GET / get all recipes
router.get('/', getAllRecipe)

// GET /:id get a recipe by id
router.get('/:id', getRecipeById)

//POST / create recipe
router.post('/', createRecipe)

// PUT /:id update recipe by id
router.put('/:id', updateRecipeById)

// DELETE /:id delete recipe by id
router.delete(`/:id`, deleteRecipeById)

module.exports = router