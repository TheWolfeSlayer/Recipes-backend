const { default: mongoose } = require("mongoose")

const recipeSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    ingredients: {
      type: Array,
      required: true
    },
    steps: {
        type: Array,
        required: true
      },
    image: {
      type: String,
      default: 'https://thumbs.dreamstime.com/z/assortment-fresh-vegetables-blank-recipe-book-wooden-background-30206420.jpg'
    },
    // Chef: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'Chef'
    // }
})

module.exports = mongoose.model('Recipe', recipeSchema)