// SearchResultBox.js
import React from 'react';

const SearchResultBox = ({ results }) => {
  return (
    <div>
      {results.map((result) => (
        <div key={result.id} style={resultBoxStyle}>
          <h3>{result.title}</h3>
          <p>{result.description}</p>
        </div>
      ))}
    </div>
  );
};

const resultBoxStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '8px 0',
};

export default SearchResultBox;
