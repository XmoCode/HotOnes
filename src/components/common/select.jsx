import React from "react";

const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="form-group input-group-lg mt-4 fs-3">
      <label htmlFor={name}>
        {label}
      </label>

      <select name={name} id={name} {...rest} className="form-select fs-3">
        <option value="">Choose...</option>
        {options.map(opt =>
          <option key={opt["_id"]} value={opt["_id"]}>
            {opt["name"]}{" "}
          </option>
        )}
      </select>

      {error[name] &&
        <div className="alert alert-danger">
          {error[name]}
        </div>}
    </div>
  );
};

export default Select;
