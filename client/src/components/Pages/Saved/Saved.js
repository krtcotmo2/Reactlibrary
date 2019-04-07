import React from "react"
import Book from "../../Book/Book"

export default function Saved(){
     return (     
          <>
               <h1>Saved</h1>
               <div className="bookHolder">
                    <Book></Book>
                    <Book></Book>
               </div>
          </>    
     );
}