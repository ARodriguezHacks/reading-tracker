import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    const { books } = this.props;
    const bookList = books.length ? (
      books.map((book) => {
        return (
          <div key={book.id}>
            <h4>{book.title}</h4>
            <p>{book.synopsis}</p>
          </div>
        );
      })
    ) : (
      <div>Reading List empty</div>
    );
    return (
      <div>
        <h2>BookList</h2>
        {bookList}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books,
  };
};

export default connect(mapStateToProps)(Home);
