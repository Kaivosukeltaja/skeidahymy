import React from 'react';

const RatingSelect = ({ onChange }) => {
  return (
    <div className="rating-select">
      <select onChange={onChange}>
        <option value="great">Loistava</option>
        <option value="good">Hyvä</option>
        <option value="ok">Tyydyttävä</option>
        <option value="bad">Huono</option>
      </select>
    </div>
  );
};

export default RatingSelect;