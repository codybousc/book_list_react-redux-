import React, { Component } from 'react';
//{connect} imports just the connect function from react-redux
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
         key={book.title}
         onClick={() => this.props.selectBook(book)}
        className="list-group-item">
        {book.title}
        </li>
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

//Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  //whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promote BookList from a component to a container --it needs to know about this new
//dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
