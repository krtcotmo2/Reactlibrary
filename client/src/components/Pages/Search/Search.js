import React from "react"
import SearchPanel from "../../SearchPanel/SearchPanel";
import Book from "../../Book/Book"

function Search() {
     return (
          <>
               <h1>Search</h1>
               <SearchPanel/>
               <div className="bookHolder">
                    <Book></Book>
                    <Book></Book>
               </div>
          </>
     );
}
export default Search