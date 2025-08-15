import React, { useState } from 'react';
import type { Book } from '../types';

interface BookListProps {
  books: Book[];
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
}

const BookList: React.FC<BookListProps> = ({ books, onDelete, onEdit }) => {
  const [editId, setEditId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');

  const startEdit = (book: Book) => {
    setEditId(book.id);
    setEditTitle(book.title);
  };

  const saveEdit = (id: number) => {
    if (editTitle.trim()) {
      onEdit(id, editTitle);
      setEditId(null);
    }
  };

return (
  <table border={1} cellPadding={8} cellSpacing={0}>
    <thead>
      <tr>
        <th>Title</th>
        <th>Author</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => (
        <tr key={book.id}>
          <td>
            {editId === book.id ? (
              <input
                type="text"
                value={editTitle}
                onChange={e => setEditTitle(e.target.value)}
              />
            ) : (
              book.title
            )}
          </td>
          <td>{book.author}</td>
          <td>
            {editId === book.id ? (
              <>
                <button onClick={() => saveEdit(book.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <button onClick={() => startEdit(book)}>Edit</button>
                <button onClick={() => onDelete(book.id)}>Delete</button>
              </>
            )}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);


};

export default BookList;
