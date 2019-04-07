import React from "react";

export default function Book(props) {
  return (
    <article className="aBook p-3">
      <div className="card">
        <div class="card-header">
          <div>{props.book.title}</div>
        </div>
        <div class="card-body">
          <div className="px-3 mb-3 row">By: {props.book.author}</div>
          <div className="px-3 row">
               <div className={props.book.image ? "col-3": "d-none"}>
                    <img className="float-left" src={props.book.image}/>
               </div>
               <div className={props.book.image ? "col-9" : "col-12"}>
                    <p>{props.book.synopsis}</p>
                    <p>Date: {props.book.date}</p>
               </div>
          </div>
        </div>
      </div>
    </article>
  );
}
