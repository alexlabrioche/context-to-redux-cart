import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import BookCard from '../BookCard';

function BookList({ books, loading }) {
  return (
    <>
      <h3>Livres</h3>
      {books.length === 0 || loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <Grid columns={3} doubling stackable>
            {books.length > 0 &&
              books.map((b) => (
                <Grid.Column key={b.id}>
                  <Segment style={{ height: '26em' }}>
                    <BookCard data={b} />
                  </Segment>
                </Grid.Column>
              ))}
          </Grid>
        </div>
      )}
    </>
  );
}

export default BookList;
