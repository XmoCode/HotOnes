import React from "react";

const Input = ({ name, label, value, error, type, onChange }) => {
  return (
    <div className="form-group input-group-lg mt-4 fs-3">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        className="form-control fs-3"
      />

      {error[name] &&
        <div className="alert alert-danger">
          {error[name]}
        </div>}
    </div>
  );
};

export default Input;
