import React, { useState } from 'react';

interface BookItemProps {
  id: number;
  title: string;
  onDelete?: (id: number) => void;
  onEdit?: (id: number, newTitle: string) => void;  // New prop for edit
}

const BookItem: React.FC<BookItemProps> = ({ id, title, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(title);

  const handleSave = () => {
    if (editTitle.trim() === '') return; 
    onEdit && onEdit(id, editTitle.trim());
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditTitle(title);
    setIsEditing(false);
  };

  return (
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
      {isEditing ? (
        <>
          <input
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            style={{ flexGrow: 1, padding: '4px' }}
          />
          <button onClick={handleSave} style={{ marginLeft: '10px' }}>Save</button>
          <button onClick={handleCancel} style={{ marginLeft: '5px' }}>Cancel</button>
        </>
      ) : (
        <>
          <span style={{ flexGrow: 1 }}>{title}</span>
          {onEdit && <button onClick={() => setIsEditing(true)} style={{ marginLeft: '10px' }}>Edit</button>}
          {onDelete && (
            <button
              onClick={() => onDelete(id)}
              style={{
                marginLeft: '10px',
                backgroundColor: '#ff4d4f',
                border: 'none',
                color: 'white',
                padding: '4px 8px',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              Delete
            </button>
          )}
        </>
      )}
    </li>
  );
};

export default BookItem;
