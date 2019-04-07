import React from "react";

export default function SearchPanel(props) {
     return(         
          <form className="col-11 col-md-8 mx-auto my-5">
               <div className="form-group">
                    <label>Search for ...</label>
                    <input type="text" className="form-control" id="tboxTerm" aria-describedby="emailHelp" placeholder="Enter a word/author"
                    value = {props.searhTerm}
                    name="searchTerm"
                    onChange={props.typeWord}
                    />               
               </div>
               <button type="submit" className="btn btn-primary" onClick={props.searchClick}>Search</button>
          </form>
     );
} 