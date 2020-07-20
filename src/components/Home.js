import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { openAddBookModal } from "../actions/bookActions";
import AddBookModal from "./AddBookModal";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Home extends Component {
  handleClick = () => {
    this.props.openAddBookModal();
  };

  render() {
    const { books, auth } = this.props;
    if (!auth.uid) return <Redirect to="/" />;

    const bookList = books ? (
      books.map((book) => {
        return (
          <Grid item xs={12} sm={6} lg={4} key={book.id}>
            <Paper>
              <h4>{book.title}</h4>
              <br />
              <small>{book.author}</small>
            </Paper>
            <Divider />
          </Grid>
        );
      })
    ) : (
      <div>Reading List empty</div>
    );
    return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Button variant="contained" onClick={this.handleClick}>
            Add Book
          </Button>
        </Grid>
        {bookList}
        {this.props.addBookModal ? <AddBookModal /> : null}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {
    addBookModal: state.book.addBookModal,
    books: state.firestore.ordered.books,
    auth: state.firebase.auth,
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
