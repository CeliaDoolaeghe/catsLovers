import React from 'react';

export default ({cat}) => (
  <div className="card">
    <div className="card-image">
      <img src={cat.url} alt={cat.race} />
        <span className="card-title">{cat.race}</span>
    </div>
    <div className="card-content">
      <p>{cat.description}</p>
    </div>
  </div>
);
