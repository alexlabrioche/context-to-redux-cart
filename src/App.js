import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import BookList from './components/BookList';
import CartDetails from './components/CartDetails';
import Appbar from './components/Appbar';

import { connect } from 'react-redux';
import { addCartFromLocalStorage } from './actions';

const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  nbArticles: state.cart.nbArticles,
});

const mapDispatchToProps = {
  addCartFromLocalStorage,
};

const CART_KEY = 'react-shop';

function App({ cart, addCartFromLocalStorage, nbArticles }) {
  useEffect(() => {
    console.info('🔥 UE App init');
    const cartFromStorage = localStorage.getItem(CART_KEY);
    if (cartFromStorage !== null) {
      addCartFromLocalStorage(JSON.parse(cartFromStorage));
    }
  }, [addCartFromLocalStorage]);

  useEffect(() => {
    console.info('🔥 UE App update');
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
    document.title = `caddie(${nbArticles})`;
  }, [cart, nbArticles]);

  return (
    <Router>
      <Appbar />
      <Switch>
        <Route path="/cart" component={CartDetails} />
        <Route path="/" component={BookList} />
      </Switch>
    </Router>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
