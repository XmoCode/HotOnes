import React from "react";

const Chevron = ({ direction, text, currentIndex, handleNavigation }) => {
  const custom = `fa fa-chevron-${direction}`;

  return (
    <div className="d-md-flex justify-content-md-end px-3 clickable">
      <button
        className="btn btn-light btn-lg"
        style={{ background: "transparent", border: 0 }}
        onClick={() => handleNavigation(currentIndex)}
      >
        {direction === "left"
          ? <span>
              <i
                className={custom}
                style={{ opacity: 0.5, marginRight: "5px" }}
                aria-hidden="true"
              />{" "}
              {text}
            </span>
          : <span>
              {text}
              <i
                className={custom}
                style={{ opacity: 0.5, marginLeft: "5px" }}
                aria-hidden="true"
              />
            </span>}
      </button>
    </div>
  );
};

export default Chevron;
