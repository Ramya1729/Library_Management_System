import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';
import { getBooks, addBook as apiAddBook, deleteBook as apiDeleteBook, updateBook as apiUpdateBook } from './api/bookService';
import type { Book, NewBook } from './types';

function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    getBooks()
      .then(response => setBooks(response.data))
      .catch(error => console.error('Error fetching books:', error));
  };

  const addBook = (title: string, author: string) => {
    const newBook: NewBook = { title, author };
    apiAddBook(newBook)
      .then(() => fetchBooks())
      .catch(error => console.error('Error adding book:', error));
  };

  const deleteBook = (id: number) => {
    apiDeleteBook(id)
      .then(() => fetchBooks())
      .catch(error => console.error('Error deleting book:', error));
  };

  const editBook = (id: number, newTitle: string) => {
    apiUpdateBook(id, { title: newTitle })
      .then(() => fetchBooks())
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div>
      <Header />
      <AddBookForm onAdd={addBook} />
      <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
    </div>
  );
}

export default App;
