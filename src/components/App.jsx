class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
     books:exampleBookData
    }
  }


  // componentDidMount() {
  //   this.getGoogleBook('hobbit');
  // }


  getGoogleBook(query) {
    var options = {
      key: 'AIzaSyCNvqymZQuQRdgYvEq_ZQdxAfu1SXn1Yxw',
      q: query
    };
     searchGoogle(options, data => {
      this.setState({
        books:data})
    });
  }

  render(){
     return (
      <div>
        <div className="col-md-7">
        <Nav search={this.getGoogleBook.bind(this)}/>
        <BookList books={this.state.books}/>
        </div>
      </div>
    )
 }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
