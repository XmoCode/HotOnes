import React from "react";

const ChangeFilter = ({ goToFilter }) => {
  return (
    <button
      className="btn btn-light btn-lg"
      style={{ background: "transparent", border: 0 }}
      onClick={() => goToFilter()}
    >
      <span>
        <i
          className="fa fa-filter"
          style={{ marginRight: "5px" }}
          aria-hidden="true"
        />
        Change filter
      </span>
    </button>
  );
};

export default ChangeFilter;
