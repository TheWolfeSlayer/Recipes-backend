const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const recipeRoutes = require('./routes/recipe')

const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use('/recipes', recipeRoutes)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port ${PORT}`))

module.exports = app