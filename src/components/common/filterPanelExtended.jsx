import React from "react";
import { ReactComponent as Chilli } from "../../images/chilli2.svg";
import ListGroupExtended from "./listGroupExtended";

const FilterPanelExtended = ({
  types,
  onTypeSelect,
  selectedType,
  onRatingSelect,
  selectedRating
}) => {
  return (
    <React.Fragment>
      <div className="d-flex p-2 justify-content-center">
        <ListGroupExtended
          types={types}
          onTypeSelect={onTypeSelect}
          selectedType={selectedType}
          onRatingSelect={onRatingSelect}
          selectedRating={selectedRating}
        />
      </div>
    </React.Fragment>
  );
};

export default FilterPanelExtended;
