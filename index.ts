console.log('Index is working...')
console.log('Huge change happened...')
console.warn('DEPLOYINGGGG...')
console.log('Server pretends to be working...')

import express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (req: express.Request, res: express.Response) => res.send('Working...'))

app.listen(PORT)

