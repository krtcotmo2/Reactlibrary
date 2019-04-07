import React from "react"
import API from "../../utils/API"
import Book from "../../Book/Book"

export default class Saved extends React.PureComponent {
     state = {
          savedBooks:[]
     }
     componentDidMount() {
          this.loadBooks();
     }
     loadBooks = () => {
          API.getBooks()
          .then(bookReults => {
               this.setState({savedBooks: bookReults.data});
          });
     }
     toggleFavorites = arg => {
          alert(arg)
               }
     render(){
          return (
               <>
                    <h1>Saved</h1>
                    <div className="bookHolder">
                         {this.state.savedBooks.map(book => {
                              return (
                                   <Book
                                   key={book.id}
                                   book={book}
                                   isbm = {book.volumeInfo.industryIdentifiers[0].identifier}
                                   clickedFav = {this.toggleFavorites}
                                   />
                              )
                         })}
                    </div>
               </>
          )
     };
}