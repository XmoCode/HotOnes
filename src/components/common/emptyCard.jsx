import React from "react";

const EmptyCard = () => {
  return (
    <div
      className="card"
      style={{
        maxWidth: "1300px",
        minHeight: "30vh",
        background: "transparent",
        border: 0
      }}
    >
      <div className="card-body">
        <div className="row mb-5 ">
          <div className="col pt-5">
            <h4 style={{ color: "black", textAlign: "center" }}>
              No reviews for this product were found.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCard;
