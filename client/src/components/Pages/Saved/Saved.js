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
     removeFavorite = arg => {
          API.removeBook(arg)
               .then(results => {
                    console.log('results',results)
                    let newSaved = this.state.savedBooks.filter(x => x.isbn !== arg);
                    this.setState({savedBooks :newSaved});
               })
     }
     render(){
          return (
               <>
                    <div className="container col-11 col-md-8 mx-auto my-5">
                         <h1>Saved</h1>
                    </div>
                    <div className="bookHolder">
                         {this.state.savedBooks.map(book => {
                              return (
                                   <Book
                                   key={book.id}
                                   book={book}
                                   isbn = {book.isbn === undefined ? "":book.isbn}
                                   clickedFav = {this.removeFavorite}
                                   isLiked = {true}
                                   />
                              )
                         })}
                    </div>
               </>
          )
     };
}