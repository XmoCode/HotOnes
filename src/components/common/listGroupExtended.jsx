import React from "react";

const ListGroupExtended = props => {
  const {
    types,
    textProperty,
    valueProperty,
    onTypeSelect,
    selectedType,
    onRatingSelect,
    selectedRating
  } = props;

  const yellowStar = (
    <i
      className="fa fa-star"
      style={{ color: "#fff600", fontSize: "18px", marginRight: "3px" }}
    />
  );

  const blackStar = (
    <i
      className="fa fa-star"
      style={{ color: "black", fontSize: "18px", marginRight: "3px" }}
    />
  );

  const andUp = (
    <span style={{ fontSize: "15px", color: "#fff600" }}>
      {"  "}and Up
    </span>
  );

  return (
    <div>
      <ul className="list-group list-group-flush py-4">
        <li
          className="list-group-item clickable"
          onClick={() => onRatingSelect(4)}
          style={
            4 === selectedRating
              ? { background: "grey" }
              : { background: "transparent" }
          }
        >
          {yellowStar}
          {yellowStar}
          {yellowStar}
          {yellowStar}
          {blackStar}
          {andUp}
        </li>

        <li
          className="list-group-item clickable"
          onClick={() => onRatingSelect(3)}
          style={
            3 === selectedRating
              ? { background: "grey" }
              : { background: "transparent" }
          }
        >
          {yellowStar}
          {yellowStar}
          {yellowStar}
          {blackStar}
          {blackStar}
          {andUp}
        </li>
        <li
          className="list-group-item clickable"
          onClick={() => onRatingSelect(2)}
          style={
            2 === selectedRating
              ? { background: "grey" }
              : { background: "transparent" }
          }
        >
          {yellowStar}
          {yellowStar}
          {blackStar}
          {blackStar}
          {blackStar}
          {andUp}
        </li>
        <li
          className="list-group-item clickable"
          onClick={() => onRatingSelect(1)}
          style={
            1 === selectedRating
              ? { background: "grey" }
              : { background: "transparent" }
          }
        >
          {yellowStar}
          {blackStar}
          {blackStar}
          {blackStar}
          {blackStar}
          {andUp}
        </li>
        <li
          className="list-group-item clickable"
          onClick={() => onRatingSelect(0)}
          style={
            0 === selectedRating
              ? { background: "grey" }
              : { background: "transparent" }
          }
        >
          {blackStar}
          {blackStar}
          {blackStar}
          {blackStar}
          {blackStar}
          {andUp}
        </li>
      </ul>

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
    </div>
  );
};

ListGroupExtended.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroupExtended;
