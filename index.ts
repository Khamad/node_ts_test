console.log('Index is working...')
console.log('Huge change happened...')
console.warn('DEPLOYINGGGG...')
console.log('Server pretends to be working...')
console.warn('Trying...')

const express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (req, res) => res.send('Working...'))

app.listen(PORT)

