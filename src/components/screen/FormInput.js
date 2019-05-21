import React from 'react';

const FormInput = ({ value, label, onChange, large = false }) => {
  return (
    <div className="main-form__field">
      <label className="main-form__label">
        { label }
        { large
          ? <textarea value={value} onChange={onChange} />
          : <input value={value} onChange={onChange} />
        }
      </label>
    </div>
  );
};

export default FormInput;