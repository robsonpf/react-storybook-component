import React, { Component } from 'react';
import './App.css';

import CartHeader from './components/CartHeader'
import CartFooter from './components/CartFooter'
import CartItems from './components/CartItems'

class App extends Component {
  render() {
    const copyright = <span>&copy; 2018</span>;
    const cartItemsList = [
  {
    id: 1,
     product: { id: 40,
     name: 'Mediocre Iron Watch',
     priceInCents: 399
   },
    quantity: 1
    },
  {
    id: 2,
    product: { id: 41, name: 'Heavy Duty Concrete Plate',
    priceInCents: 499
   },
    quantity: 2
    },
  {
    id: 3,
     product: { id: 42, name: 'Intelligent Paper Knife',
      priceInCents: 1999
    },
    quantity: 1
    },
    {
      id:4,
      product: {
      id:43,
      name: 'Sarcastic Glass Cup',
      priceInCents: 1099
    },
    quantity: 3
    }
];
    return (
      <div class ClassName="App">
        <CartHeader />
        <CartItems cartItemsList={cartItemsList}/>
        <CartFooter copyright={copyright}/>
      </div>
    );
  }
}

export default App;
