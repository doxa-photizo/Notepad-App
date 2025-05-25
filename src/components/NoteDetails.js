import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function NoteDetails({ notes }) {
  const { id } = useParams(); // Get the note ID from the URL
  const navigate = useNavigate(); // Optional: for a back button

  const openNote = notes.find((note) => note.id === id); // Find the note with the matching ID

  // Always call hooks unconditionally
  const [editText, setEditText] = useState(openNote?.text || '');

  if (!openNote) {
    return <div>Note not found.</div>;
  }

  function handleChange(event) {
    setEditText(event.target.value);
  }

  return (
    <div className="note-details">
      <h2>Note Details</h2>
      <p><strong>Date:</strong> {openNote.date}</p>
      <p><strong>Original Text:</strong> {openNote.text}</p>

      <textarea
        className="typehere"
        value={editText}
        onChange={handleChange}
      />

      <button className='btn'  onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}

export default NoteDetails;
