import React, { Component } from 'react';
//{connect} imports just the connect function from react-redux
import { connect } from 'react-redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  //whatever's returned from here will show up as props inside Booklist (our container)
  //Our containers then, are the link between redux and react
  //And is all done via this mapStateToProps function
  return {
    books: state.books
  };
}

//final portion connecting redux and react
export default connect(mapStateToProps)(BookList);
