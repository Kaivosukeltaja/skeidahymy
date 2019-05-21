import React from 'react';
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

export default FormField;