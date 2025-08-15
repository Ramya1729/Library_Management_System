import axios from 'axios';
import type { Book, NewBook } from '../types';

const API_URL = 'http://localhost:8080/api/books';

export const getBooks = () => axios.get<Book[]>(API_URL);

export const addBook = (book: NewBook) => axios.post<Book>(API_URL, book);

export const updateBook = (id: number, book: Partial<NewBook>) =>
  axios.put<Book>(`${API_URL}/${id}`, book);

export const deleteBook = (id: number) =>
  axios.delete<void>(`${API_URL}/${id}`);
