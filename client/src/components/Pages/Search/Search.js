import React from "react"
import SearchPanel from "../../SearchPanel/SearchPanel";
import API from "../../utils/API"
import Book from "../../Book/Book"

class Search extends React.PureComponent {
     state = {
          foundBooks:[],
          savedBooks:[],
          searchTerm:"NEW YORK TIMES BESTSELLER",
          error: false
     }
     
     componentDidMount() {
          this.doSearch();
     }
    
     doSearch = (event) => {
          if(event)
               event.preventDefault();
          
          API.searchBooks(this.state.searchTerm)
          .then((response)=>{
               return response.data.items;
          })
          .then(values=>{               
               API.getBooks()
               .then(savedBookRes => {
                    this.setState({foundBooks: values, savedBooks: savedBookRes.data});
               })
          })
          .catch(function(err){
              this.setState({error:true});
          });
          
     };

     handleInputChange = event => {
          const { name, value } = event.target;
         this.setState({
            [name]: value
          });          
        };

     toggleFavorites = (arg, liked) => {
          if(liked){
               API.removeBook(arg)
               .then(results => {
                    let newSaved = this.state.savedBooks.filter(x => x.isbn !== arg);
                    this.setState({savedBooks :newSaved});
               })
          }else{
               let aBook = this.state.foundBooks.find(x => x.volumeInfo.industryIdentifiers[0].identifier == arg);
               let bookObj={
                    author:aBook.volumeInfo.authors,
                    title:aBook.volumeInfo.title,
                    isbn:arg,
                    synopsis:aBook.volumeInfo.description,
                    image: aBook.volumeInfo.imageLinks.smallThumbnail,
                    link: aBook.volumeInfo.infoLink,
                    pageCount: aBook.volumeInfo.pageCount
               }
               API.addBook(bookObj)
               .then(results => {
                    let joined = this.state.savedBooks.concat(bookObj);
                    this.setState({savedBooks:joined});
               })
          }
     }

     render(){
          return (
               <>
                    <div className="container col-11 col-md-8 mx-auto my-5">
                         <h1>Search</h1>
                    </div>                    
                    <div class="container col-11 col-md-8 mx-auto alert alert-danger" role="alert" hidden={!this.state.error}><h2>Error loading books from Google</h2></div>
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
                                   isbn={book.volumeInfo.industryIdentifiers[0].identifier}
                                   clickedFav = {this.toggleFavorites}
                                   isLiked= {this.state.savedBooks.filter(x => x.isbn ==book.volumeInfo.industryIdentifiers[0].identifier).length > 0}
                                   />
                              )
                         })}
                    </div>
               </>
          )
     };
}
export default Search