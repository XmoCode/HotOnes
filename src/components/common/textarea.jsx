import React from "react";

const TextArea = ({ name, label, value, error, onChange, rows, type }) => {
  return (
    <div className="form-group input-group-lg mt-4 fs-3">
      <label htmlFor={name}>
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        value={value}
        rows={rows}
        onChange={onChange}
        type={type}
        className="form-control fs-3"
        style={{ width: "100%", borderColor: "#CED4DA" }}
      />

      {error[name] &&
        <div className="alert alert-danger">
          {" "}{error[name]}{" "}
        </div>}
    </div>
  );
};

export default TextArea;
