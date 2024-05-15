// TaskDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

function TaskDetails() {
  const { id } = useParams();

  // Fetch task details based on id
  return (
    <div>
      <h1>Task Details</h1>
      <p>Task ID: {id}</p>
      {/* Display task details */}
    </div>
  );
}

export default TaskDetails;
