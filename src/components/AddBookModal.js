import React, { Component } from "react";
import Input from "@material-ui/core/Input";

class AddBookModal extends Component {
  render() {
    return (
      <form>
        <label>Title</label>
        <Input placeholder="Book Title" />
        <label>Author</label>
        <Input placeholder="Book Author" />
        <button>Add</button>
      </form>
    );
  }
}

export default AddBookModal;
