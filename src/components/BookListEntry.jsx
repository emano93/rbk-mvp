var BookListEntry = ({book, handleClick}) => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={book.volumeInfo.imageLinks.thumbnail} alt="" />
    </div>
    <div className="media-body" >
    <div className="video-list-entry-title" onClick = {() => handleClick(video)}>{book.volumeInfo.selfLink}</div>
      <div className="video-list-entry-title">{book.volumeInfo.title}</div>
      <div className="video-list-entry-authors">{book.volumeInfo.authors}</div>
    <a href={book.accessInfo.webReaderLink}>press here and start reading</a>  
   <div className="video-list-entry-authors">
   <a href={book.accessInfo.pdf.acsTokenLink} className='btn btn-primary'> Download </a> </div>
   </div> 
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
BookListEntry.propTypes = {
  book: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.BookListEntry = BookListEntry;