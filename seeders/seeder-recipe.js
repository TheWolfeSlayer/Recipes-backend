const db = require('../models')

db.Place.create([{
    name: '',
    ingredients: ['',''],
    steps: ['',''],
    image: '',
}, {
    name: '',
    ingredients: ['',''],
    steps: ['',''],
    image: '',
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure', err)
    process.exit()
})