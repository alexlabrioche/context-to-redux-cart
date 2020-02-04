import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import BookListPresenter from './BookList.presenter';
import { loadBooks } from '../../actions';

const mapStateToProps = (state) => ({
  books: state.REDUX_THUNK.data,
  loading: state.REDUX_THUNK.loading,
  error: state.REDUX_THUNK.error,
});

const mapDispatchToProps = {
  loadBooks,
};

function BookList({ loadBooks, loading, books }) {
  useEffect(() => {
    console.info('🔥 UE BookList');
    loadBooks();
  }, [loadBooks]);

  return <BookListPresenter books={books} loading={loading} />;
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
