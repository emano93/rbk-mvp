var BookList = ({books,handleClick}) => (
<div id="list">
    {books.map(book => <BookListEntry book={book} handleClick = {handleClick}/>)}
  </div>
);

BookList.propTypes = {
  books: React.PropTypes.array.isRequired
};

window.BookList = BookList;

