import axios from "axios";

export default {
  // Gets all books
  getBooks: ()  => axios.get("/api/books"),
  searchBooks: (arg) => axios.get(`https://www.googleapis.com/books/v1/volumes?q=${arg}`),
  removeBook: id => axios.delete("/api/removeBook/"+id),
  addBook: item => axios.post("/api/addBook/", item)
};
