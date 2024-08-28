const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();


public_users.post("/register", (req,res) => {
  //Write your code here
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  const isbn = req.params.isbn;
  book = books[isbn];
  res.send(book);
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  const author = req.params.author;
  Object.values(books)
    .filter((i) => i.author === author)
    .forEach((i) => res.send(i));
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  const title = req.params.title;
  Object.values(books)
    .filter((i) => i.title === title)
    .forEach((i) => res.send(i));
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  const isbn = req.params.isbn;  
  res.send(JSON.stringify(books[isbn].reviews, null, 4));
});

module.exports.general = public_users;
