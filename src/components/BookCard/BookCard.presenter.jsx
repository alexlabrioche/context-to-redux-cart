import React from 'react';
import { animated } from 'react-spring';
import { Card, Image, Icon } from 'semantic-ui-react';

function BookCard({ books, handleAddToCart, animation }) {
  return (
    <Card style={{ height: '100%' }}>
      <Image src={books.image} wrapped ui={false} style={{ width: 120 }} />
      <Card.Content>
        <Card.Header>{books.title}</Card.Header>
        <Card.Meta>
          <span className="date">publié en {books.year}</span>
        </Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <animated.div
          style={{
            transform: animation.x
              .interpolate({
                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                output: [1, 0.97, 0.95, 1.1, 0.95, 1.1, 1.03, 1],
              })
              .interpolate((x) => `scale(${x})`),
          }}
        >
          <Icon
            name="add to cart"
            size="big"
            onClick={() => handleAddToCart(books)}
            style={{ cursor: 'pointer' }}
          />
        </animated.div>
      </Card.Content>
    </Card>
  );
}

export default BookCard;
