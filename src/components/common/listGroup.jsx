import React from "react";

const ListGroup = props => {
  const {
    types,
    textProperty,
    valueProperty,
    onTypeSelect,
    selectedType
  } = props;

  return (
    <div className="card" style={{ background: "grey" }}>
      <ul className="list-group fs-4 text-uppercase">
        {types.map(type =>
          <li
            key={type[valueProperty]}
            className={"list-group-item"}
            style={{ background: "grey", fontWeight: "bolder" }}
          >
            <input
              className="form-check-input me-3 clickable"
              type="radio"
              onChange={() => onTypeSelect(type)}
              checked={type !== selectedType ? false : true}
              value={type[textProperty]}
              aria-label={type[textProperty]}
            />
            {type[textProperty]}
          </li>
        )}
      </ul>
    </div>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
