import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, emptyCart } from '../../actions';

import CartDetailsPresenter from './CartDetails.presenter';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  addToCart,
  removeFromCart,
  emptyCart,
};

function CartDetails({ cart, addToCart, removeFromCart, emptyCart }) {
  return (
    <CartDetailsPresenter
      cart={cart}
      addToCart={addToCart}
      removeFromCart={removeFromCart}
      emptyCart={emptyCart}
    />
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);
