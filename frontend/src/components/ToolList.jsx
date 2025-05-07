import React, { useEffect, useState } from 'react';

function ToolList() {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/tools')
      .then(res => res.json())
      .then(data => setTools(data))
      .catch(err => console.error('Failed to fetch tools:', err));
  }, []);

  return (
    <ul>
      {tools.map(tool => (
        <li key={tool.id}>
          {tool.name} — {tool.category} — {tool.condition}
        </li>
      ))}
    </ul>
  );
}

export default ToolList;
