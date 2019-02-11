const express = require('express')
const ctrl = require('./controller')

const app = express()

// let result = express.json()
app.use(express.json())

app.get('/api/items', ctrl.getItems)

app.post('/api/item', ctrl.createItem)

app.put('/api/item/:id', ctrl.updateItem)

app.delete('/api/item/:id', ctrl.deleteItem)


app.listen(4444, () => console.log('let this work on 4444'))