console.log('Index is working...')
console.log('Huge change happened...')
console.warn('DEPLOYINGGGG...')
console.log('Server pretends to be working...')
console.warn('This is WARNING...')

import express = require('express')
const app = express()

const PORT = process.env.PORT

app.get('/', (req: express.Request, res: express.Response) => res.send('Server is working...'))

app.listen(PORT)

