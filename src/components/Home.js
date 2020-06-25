import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { openAddBookModal } from "../actions/bookActions";
import AddBookModal from "./AddBookModal";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

class Home extends Component {
  handleClick = () => {
    this.props.openAddBookModal();
  };

  render() {
    const { books } = this.props;
    const bookList = books ? (
      books.map((book) => {
        return (
          <div key={book.id}>
            <ListItem>
              <h4>{book.title}</h4>
              <br />
              <small>{book.author}</small>
            </ListItem>
            <Divider />
          </div>
        );
      })
    ) : (
      <div>Reading List empty</div>
    );
    return (
      <Grid container>
        <Grid item xs={12}>
          <h2>BookList</h2>
          <Button variant="contained" onClick={this.handleClick}>
            Add Book
          </Button>
        </Grid>
        <Grid item xs={12}>
          <List>{bookList}</List>
        </Grid>
        <hr />
        {this.props.addBookModal ? <AddBookModal /> : null}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    addBookModal: state.book.addBookModal,
    books: state.firestore.ordered.books,
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
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{ collection: "books" }])
)(Home);
