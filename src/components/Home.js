import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { openAddBookModal } from "../actions/bookActions";
import AddBookModal from "./AddBookModal";

class Home extends Component {
  handleClick = () => {
    this.props.openAddBookModal();
  };

  render() {
    const { books } = this.props;
    const bookList = books.length ? (
      books.map((book) => {
        return (
          <div key={book.id}>
            <h4>{book.title}</h4>
            <h5>{book.author}</h5>
          </div>
        );
      })
    ) : (
      <div>Reading List empty</div>
    );
    return (
      <div>
        <h2>BookList</h2>
        <Button variant="contained" onClick={this.handleClick}>
          Add Book
        </Button>
        {bookList}
        <hr />
        {this.props.addBookModal ? <AddBookModal /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addBookModal: state.addBookModal,
    books: state.books,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    openAddBookModal: () => {
      dispatch(openAddBookModal());
    },
  };
};
//Connect is a function that actually returns a higher order component. By calling connect() and it returning
// a HOC, that HOC then is invoking and taking the Home component (which is essentially a function) as its argument
export default connect(mapStateToProps, mapDispatchToProps)(Home);
