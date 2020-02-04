import React, { useState } from 'react';
import { useSpring } from 'react-spring';
import { connect } from 'react-redux';

import BookCardPresenter from './BookCard.presenter';
import { addToCart } from '../../actions';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

const mapDispatchToProps = {
  addToCart,
};

function BookCard({ data, addToCart }) {
  const [anim, setAnim] = useState(false);
  const props = useSpring({ to: { x: anim ? 0 : 1 } });

  function handleAddToCart(data) {
    setAnim(!anim);
    addToCart(data);
  }

  return <BookCardPresenter books={data} animation={props} handleAddToCart={handleAddToCart} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);
