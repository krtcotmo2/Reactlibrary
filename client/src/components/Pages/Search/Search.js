import React from "react"
import SearchPanel from "../../SearchPanel/SearchPanel";
import API from "../../utils/API"
import Book from "../../Book/Book"

class Search extends React.PureComponent {
     state = {
          foundBooks:[],
          searchTerm:"best seller list"
     }
     componentDidMount() {
          this.doSearch();
     }
    
     doSearch = (event) => {
          if(event)
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
                    <div className="container">
                         <h1>Search</h1>
                    </div>                    
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