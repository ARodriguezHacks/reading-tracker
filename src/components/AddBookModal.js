import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";
import { addBook } from "../actions/bookActions";

class AddBookModal extends Component {
  handleSubmit = () => {
    this.props.addBook(this.props.book.title, this.props.book.author);
  };

  handleChange = () => {};

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <label>Title</label>
        <Input placeholder="Book Title" value={} onChange={} />
        <label>Author</label>
        <Input placeholder="Book Author" value={} onChange={} />
        <button type="submit">Add</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    addBook: state.addBook,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (title, author) => {
      dispatch(addBook(title, author));
    },
  };
};

export default AddBookModal;
