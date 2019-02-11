import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import Title from './components/Title'
import Item from './components/Item'
import Footer from './components/Footer'
import Logo from './components/Logo'

class App extends Component {
  constructor() {
    super()

    this.state = {
      items: [],
      name:'',
      Quantity: 0,
    }

    this.deleteItem = this.deleteItem.bind(this)
    this.updateItem = this.updateItem.bind(this)
    this.setEdit = this.setEdit.bind(this)
  }

  handleName(val) {
    this.setState({
      name: val
    })
  }

  handleQuantity(val) {
    this.setState({
      Quantity: val
    })
  }

  componentDidMount() {
    axios.get('/api/items').then(res => {
      console.log(res)
      this.setState({
        items: res.data
      })
    })
  }

  createItem(name, Quantity) {
    axios.post('/api/item', {name, Quantity}).then(res => {
      // console.log(1111,res);
      this.setState({
        items: res.data,
        name: '',
        Quantity: 0
      })
    })
  }

  deleteItem(id) {
    axios.delete(`api/item/${id}`).then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  setEdit(name, Quantity){
    this.setState({
        name,
        Quantity
    })
  }

  updateItem(id){
    const {name, Quantity} = this.state
    axios.put(`/api/item/${id}`, {name, Quantity}).then(res => {
      this.setState({
        items: res.data,
        name: '',
        Quantity: 0
      })
    })
  }

  
  render() {
    // console.log(this.state)
    // const items = this.state.items
    const {name, Quantity} = this.state
    const mappedItems = this.state.items.map(item => {
      return (
        <Item 
        key={item.id}
        item={item}
        deleteItem={this.deleteItem}
        updateItem={this.updateItem}
        setEdit={this.setEdit}
        />
      )
    })
    return (
      <div className="App">
        <Title />
        <input type="text" placeholder="Name of Item" onChange={e => this.handleName(e.target.value)} value={this.state.name} />
        <input type="text" placeholder="Amount" onChange={e => this.handleQuantity(e.target.value)} value={this.state.Quantity} />
        <button onClick={() => this.createItem(name, Quantity)}>List Item</button>
        {mappedItems}
        <Logo />
        <Footer />
      </div>
    );
  }
}

export default App;
