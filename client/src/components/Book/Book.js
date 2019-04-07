import React from "react";
import "./Book.css";

export default function Book(props) {
  return (
    <article className="aBook p-3">
      <div className="card">
        <div className="card-header d-flex justify-content-between">
          <div><a href={props.book.link} target="_blank">{props.book.title}</a></div>
          <div><button className="btn-smy btn-secondary" onClick={() => props.clickedFav(props.isbm)}>Add to favorites</button></div>
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
                    <input type="hidden" value={props.isbm}/>
               </div>
          </div>
        </div>
      </div>
    </article>
  );
}
