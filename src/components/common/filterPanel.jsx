import React from "react";
import { ReactComponent as Chilli } from "../../images/chilli2.svg";
import ListGroup from "./listGroup";

const FilterPanel = ({ types, onTypeSelect, selectedType }) => {
  return (
    <React.Fragment>
      <div className="d-flex p-2 justify-content-center">
        <Chilli style={{ width: 135, height: 120 }} />
      </div>
      <div className="d-flex p-2 justify-content-center">
        <ListGroup
          types={types} 
          onTypeSelect={onTypeSelect}
          selectedType={selectedType}
        />
      </div>
    </React.Fragment>
  );
};

export default FilterPanel;
