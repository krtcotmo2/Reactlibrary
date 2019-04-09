import React from "react";
import "./Book.css";

 function Book(props) {
  return (
    <article className="aBook p-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div><a href={props.book.link} target="_blank">{props.book.title}</a></div>
          <div><button className={evalVis(props.isbn)} onClick={() => props.clickedFav(props.isbn, props.isLiked)}>{props.isLiked ? "Remove from favorites":"Add to favorites"}</button>{noSave(props.isbn)}</div>
        </div>
        <div className="card-body">
          <div className="px-3 mb-3 row">By: {props.book.author}</div>
          <div className="px-3 row">
               <div className={props.book.image ? "col-3": "d-none"}>
                    <img className="float-left" src={props.book.image}/>
               </div>
               <div className={props.book.image ? "col-9" : "col-12"}>
                    <p>{props.book.synopsis}</p>
                    <p>{props.book.pageCount ? `# of Pages: ${props.book.pageCount}`:'' }</p>
                    <input type="hidden" value={props.isbn}/>
               </div>
          </div>
        </div>
      </div>
    </article>
  );
}
let evalVis = (arg) => {
     if(arg === "") 
          return "d-none";
     return "btn-smy btn-secondary";
}
let noSave =(arg) =>{
     if(arg === "") 
          return "No ISBN Number";
}
export default Book;
