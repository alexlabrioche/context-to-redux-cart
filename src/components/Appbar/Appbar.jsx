import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Icon } from 'semantic-ui-react';

import CartSummary from '../CartSummary';

export default function Appbar() {
  return (
    <Container>
      <Menu stackable>
        <Menu.Item>
          <Link to="/">Campus Shop</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/cart">
            <Icon name="cart" size="small" />
            <CartSummary />
          </Link>
        </Menu.Item>
      </Menu>
    </Container>
  );
}
