import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  nbArticles: state.cart.nbArticles,
});

function CartSummary({ nbArticles }) {
  return <span>Caddie {nbArticles}</span>;
}

export default connect(mapStateToProps)(CartSummary);
