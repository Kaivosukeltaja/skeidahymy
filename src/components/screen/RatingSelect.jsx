import React from 'react';
import PropTypes from 'prop-types';

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

RatingSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default RatingSelect;