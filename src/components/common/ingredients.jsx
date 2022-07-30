import React from "react";

const Ingredients = ({ sauce }) => {
  return (
    <div className="d-flex me-5 mt-3 pb-3">
      {sauce.ingredients}
    </div>
  );
};

export default Ingredients;
