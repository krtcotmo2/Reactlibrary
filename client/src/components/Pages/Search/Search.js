import React from "react"
import SearchPanel from "../../SearchPanel/SearchPanel";
import API from "../../utils/API"
import Book from "../../Book/Book"

class Search extends React.PureComponent {
     state = {
          foundBooks:[],
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
     };

     doSearch = (event) => {
          event.preventDefault();
          API.searchBooks(this.state.searchTerm)
          .then((response)=>{
               this.setState({foundBooks: response.data.items});
          })
          .catch(function(err){
               console.log(err)
          });
          
     };

     handleInputChange = event => {
          const { name, value } = event.target;
         this.setState({
            [name]: value
          });          
        };

     toggleFavorites = arg => {
          alert(arg)
     }

     render(){
          return (
               <>
                    <h1>Search</h1>
                    <SearchPanel searchClick = {this.doSearch} searhTerm={this.state.searchTerms} typeWord={this.handleInputChange}/>
                    <div className="bookHolder">
                         {this.state.foundBooks.map((book, ind ) => {
                              let adjustedVal={
                                   title: book.volumeInfo.title,
                                   author: book.volumeInfo.authors,
                                   image: book.volumeInfo.imageLinks != undefined ? book.volumeInfo.imageLinks.smallThumbnail : null ,
                                   synopsis: book.volumeInfo.description,
                                   link: book.volumeInfo.infoLink,
                                   pageCount: book.volumeInfo.pageCount
                              }
                              return (
                                   <Book
                                   key={ind}
                                   book={adjustedVal}
                                   isbm={book.volumeInfo.industryIdentifiers[0].identifier}
                                   clickedFav = {this.toggleFavorites}
                                   />
                              )
                         })}
                    </div>
               </>
          )
     };
}
export default Search