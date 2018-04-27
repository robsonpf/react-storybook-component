import React, { Component } from 'react';
import CartItem from './CartItem';

class CartItems extends Component {
  render() {
    const { items } = this.props
    console.log(items);

    // const { products } = this.props;
    // console.log("products",products);
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {items.map((item, i) => {
            return <CartItem key={i} item={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default CartItems;
