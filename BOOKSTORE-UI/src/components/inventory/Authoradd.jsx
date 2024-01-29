import React, { useState, useEffect } from 'react';

export default function AuthorDialog ({ isOpen, onClose, onAddAuthor }) {
  const [authorName, setAuthorName] = useState('');

  const handleAddAuthor = () => {
    // Execute your function with the authorName
    onAddAuthor(authorName);

    // Close the dialog box
    onClose();
  };

  useEffect(() => {
    // Reset the authorName when the dialog opens
    setAuthorName('');
  }, [isOpen]);

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
        display: isOpen ? 'block' : 'none',
        zIndex: 1000,
      }}
    >
      <h3>Add Author</h3>
      <label>
        Author Name:
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
      </label>
      <button onClick={handleAddAuthor}>Add Author</button>
    </div>
  );
};