import React from "react"
import SearchPanel from "../../SearchPanel/SearchPanel";
import API from "../../utils/API"
import Book from "../../Book/Book"

class Search extends React.PureComponent {
     state = {
          foundBooks:[],
          savedBooks:[],
          searchTerm:""
     }
     componentDidMount() {
          //this.loadBooks();
     }
     loadBooks = () => {
          API.getBooks()
          .then(bookReults => {
               this.setState({foundBooks: bookReults.data});
          });
     }
     render(){
          return (
               <>
                    <h1>Search</h1>
                    <SearchPanel/>
                    <div className="bookHolder">
                         {this.state.foundBooks.map(book => {
                              return (
                                   <Book
                                   key={book.id}
                                   book={book}
                                   />
                              )
                         })}
                    </div>
               </>
          )
     };
}
export default Search