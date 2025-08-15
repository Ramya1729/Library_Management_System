import React, { useState } from 'react';

interface AddBookFormProps {
  onAdd: (title: string, author: string) => void;
}

const AddBookForm: React.FC<AddBookFormProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return; 
    onAdd(title, author);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
        id="title"
        name="title"
        style={{ padding: '0.5rem', width: '200px' }}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
        required
        id="author"
        name="author"
        style={{ padding: '0.5rem', width: '200px', marginLeft: '10px' }}
      />
      <button type="submit" style={{ marginLeft: '10px', padding: '0.5rem 1rem' }}>
        Add Book
      </button>
    </form>
  );
};

export default AddBookForm;
