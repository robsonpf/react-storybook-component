import React, { Component } from 'react';

class CartItem extends Component {
  render() {
    const { product, quantity, id } = this.props.item


    return (
      <div className="list-group-item">
        <div className="row">
          <div className="col-md-8">{product.name}</div>
          <div className="col-md-2">{product.priceInCents}</div>
          <div className="col-md-2">{quantity}</div>
        </div>
      </div>
    );
  }
}

export default CartItem;
