import React from 'react';
import './style.css';
const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
