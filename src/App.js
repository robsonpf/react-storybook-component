import React, { Component } from 'react';
import './App.css';

import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'



class App extends Component {

  state = {
    items: []
  }

  async componentDidMount() {
    const responseProducts = await fetch('http://localhost:8082/api/products')
    const products = await responseProducts.json()
    console.log("products", products);
    // this.setState({products: json})
    const responseItems = await fetch('http://localhost:8082/api/items')
    const items = await responseItems.json()
    console.log("items", items);

    this.setState({
      items: products.map((product, idx) => {
        console.log(product);
        console.log(idx);
          return {
            product,
            id: items[idx].id,
            quantity: items[idx].quantity
          }
        })
    })
    console.log("this.state.products", this.state.products);
  }

  render() {
    const copyright = <span>&copy; 2018</span>;

    return (
      <div className="App">
        <CartHeader />
      <CartItems items={this.state.items}/>
        <CartFooter copyright={copyright}/>
      </div>
    );
  }
}

export default App;
