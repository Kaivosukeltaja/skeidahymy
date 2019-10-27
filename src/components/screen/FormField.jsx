import React from 'react';
import PropTypes from 'prop-types';

import './FormField.scss';

const FormField = ({ value, label, onChange, large = false }) => {
  return (
    <div className="form-field">
      <label className="form-field__label">
        <div className="form-field__text">{ label }</div>
        { large
          ? <textarea rows="10" className="form-field__input form-field__input--large" value={value} onChange={onChange} />
          : <input className="form-field__input" value={value} onChange={onChange} />
        }
      </label>
    </div>
  );
};

FormField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  large: PropTypes.bool,
}

export default FormField;