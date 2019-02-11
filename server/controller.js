const items = []
let id = 1
module.exports = {
    getItems: (req, res) => {
        res.status(200).send(items)
    },

    createItem: (req, res) => {
        const {Quantity, name} = req.body
        items.push({
            id,
            name,
            Quantity
        })
        id++;
        res.status(200).send(items)
    },
    

    deleteItem: (req, res) => {
        const {id} = req.params

        const index = items.findIndex(item => item.id == id)

        items.splice(index, 1)

        res.status(200).send(items)
    },

    updateItem: (req, res) => {
        const {id} = req.params
        const { Quantity, name } = req.body

        let index = items.findIndex(item => item.id == id)

        let foundItem = items[index];

        foundItem = {
            id: foundItem.id,
            name: name || foundItem.name,
            Quantity: Quantity || foundItem.Quantity
        }

        items.splice(index, 1, foundItem)

        res.status(200).send(items)
    }
}