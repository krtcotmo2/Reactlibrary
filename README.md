# Google library powered by React and Mongo

![alt text](https://img.shields.io/badge/uses-Node-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Mongo-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Express-brightgreen.svg) ![alt text](https://img.shields.io/badge/uses-Axios-brightgreen.svg)  ![alt text](https://img.shields.io/badge/uses-React-blue.svg)  ![alt text](https://img.shields.io/badge/uses-Bootstrap-blue.svg)

If the Heroku server is asleep it may take a few moments for the defautl data to load.

The componentDidMount function uses the google books api to get results using the terms Best Sellers list to get top current books. The system then goes to the Mongo db and gets the users saved books. I preform some mapping of the two lists to find their intersection points and if there is a common book, that book is flagged to have the "Add to favorites" button swith to "Remove from favorites." 

The user has the ability to enter in a keyword value, a topic, an author, a title, etc. to perform a search. The results are returned in a list of book objects.

React breaks down that list and displays them with a series of cards. The isbn number is stored as the key value for each book. The add/remove button uses that isbn number to store/remove from the Mongo db.

The Mongo db requires that the isbn be a unique value so that no duplicates can occur.
```
Model:

{
    "_id" : ObjectId("5cb1cac7a907d6002a6fad11"),
    "author" : "Kyle Mills",
    "title" : "Smoke Screen",
    "isbn" : "0786260505",
    "synopsis" : "Through a series of unwanted promotions, Trevor Barnett has become the lead spokesman for the tobacco industry just as it's on the verge of extinction.",
    "image" : "http://books.google.com/books/content?id=koQXyaN1pdwC&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    "link" : "http://books.google.com/books?id=koQXyaN1pdwC&dq=smokescreen&hl=&source=gbs_api",
    "pageCount" : 568,
    "date" : ISODate("2019-04-13T11:40:55.619Z"),
    "__v" : 0
}

```
