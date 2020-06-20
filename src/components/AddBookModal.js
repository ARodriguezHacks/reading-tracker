import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import { connect } from "react-redux";
import { addBook } from "../actions/bookActions";

class AddBookModal extends Component {
  state = {
    title: "",
    author: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.addBook(this.state);
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  render() {
    return (
      <form onClick={this.handleSubmit}>
        <label htmlFor="title">Title</label>
        <Input
          placeholder="Book Title"
          id="title"
          onChange={this.handleChange}
        />
        <label htmlFor="author">Author</label>
        <Input
          placeholder="Book Author"
          id="author"
          onChange={this.handleChange}
        />
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
// Takes in the dispatch method so that we can then call it. Then whatever property we want to add to the component's props, we'll add inside the return object. In this case that property will be addBook
const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => {
      dispatch(addBook(book));
    },
  };
};

export default connect(null, mapDispatchToProps)(AddBookModal);
