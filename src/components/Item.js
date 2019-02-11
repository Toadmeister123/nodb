import React, {Component} from 'react'

class Item extends Component {
    constructor(props){
        super(props)

        this.state = {
            editing: false
        }
    }       

    edit() {
        const {item} = this.props
        this.setState({
            editing: true
        })
        this.props.setEdit(item.name, item.Quantity)
    }

    updateItem(id){
        this.props.updateItem(id)

        this.setState({
            editing: false
        })
    }
    render(){
        const {item, deleteItem} = this.props
        return(
            <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.Quantity}</p>
                <button onClick={() => deleteItem(item.id)}>Remove</button>
                {this.state.editing ? (
                    <button onClick={() => this.updateItem(item.id)}>Save</button>
                ) : (
                    <button onClick={() => this.edit()}>Edit</button>
                )}
            </div>
        )
    }
}

export default Item;    