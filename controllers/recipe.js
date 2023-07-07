const Recipe = require('../models/Recipe')

async function getAllRecipe(req, res) {
    try {
        const recipe = await Recipe.find()
        res.json(recipe)
    } catch (error) {
        console.log('error fetching recipe:', error)
        res.json({ 'message': 'error fetching recipe' })
    }
}

async function getRecipeById(req, res) {
    try {
        const { id } = req.params
        const recipe = await Recipe.findById(id)
        res.json(recipe)
    } catch (error) {
        console.log('error fetching recipe by id:', error)
        res.json({ 'message': 'error fetching recipe' })
    }
}

async function createRecipe(req, res) {
    try {
        if (!req.body.image) req.body.image = undefined
        await new Recipe(req.body).save()
        res.status(201).json({ 'message': 'recipe created' })
    } catch (error) {
        console.log('error creating recipe:', error)
        res.json({ 'message': 'error creating recipe' })
    }
}

async function updateRecipeById(req, res) {
    try {
        const { id } = req.params
        if (!req.body.image) req.body.image = undefined
        await Recipe.findByIdAndUpdate(id, req.body)
        res.status(204).json({ 'message': 'recipe updated' })
    } catch (error) {
        console.log('error updating recipe:', error)
        res.json({ 'message': 'error updating recipe' })
    }
}

async function deleteRecipeById(req, res) {
    try {
        const { id } = req.params
        await Recipe.findByIdAndDelete(id)
        res.status(204).json({ 'message': 'recipe deleted' })
    } catch (error) {
        console.log('error deleting recipe:', error)
        res.json({ 'message': 'error deleting recipe' })
    }
}

module.exports = {
    getAllRecipe,
    getRecipeById,
    createRecipe,
    updateRecipeById,
    deleteRecipeById
}