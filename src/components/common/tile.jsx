import React from "react";
import { Link } from "react-router-dom";
import "./tile.scss";

const Tile = props => {
  const getDetails = props => {
    return props.item.pepperType
      ? props.item.pepperType
      : props.item.ingredients;
  };

  return (
    <div className="tile">
      <div className="tile__header">
        <span className="origin">
          {props.item.country}
        </span>
        <span>
          {props.item.avgRating}
        </span>
      </div>
      <div className="tile__image">
        <img src={props.item.photo} style={{ width: 110 }} alt="..." />
      </div>

      <div className="tile__text">
        <p className="name truncate-line-2">
          {props.item.name}
        </p>
        <p className="brand">
          {props.item.brand}
        </p>
      </div>
      <div className="tile__options">
        <Link to={{ pathname: `/sauce/${props.item._id}`, state: props.items }}>
          SEE DETAILS
        </Link>
      </div>
    </div>
  );
};

export default Tile;
