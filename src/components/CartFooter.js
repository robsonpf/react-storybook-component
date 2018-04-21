import React, { Component } from 'react';

class CartFooter extends Component {
  render () {
    const { copyright }= this.props;
    return (
       <nav className ="navbar navbar-dark bg-dark">
       <a className= "navbar-brand" href=".">
       {copyright}
       </a>
       </nav>
    );
  }
}

export default CartFooter;
