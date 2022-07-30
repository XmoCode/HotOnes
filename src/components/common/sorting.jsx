import React, { Component } from "react";
import "./sorting.scss";

class Sorting extends Component {
  state = {};

  renderSortIcon = opt => {
    const { sortObj } = this.props;

    if (opt.path !== sortObj.path) return null;
    if (sortObj.order === "asc") return <i className="fa fa-sort-asc" />;
    else return <i className="fa fa-sort-desc" />;
  };

  render() {
    const { options, onSort } = this.props;

    return (
      <div className="d-flex pt-4 pb-2 fs-4 text-white text-uppercase">
        {options.map(opt =>
          <span
            key={opt.label}
            className="sorting clickable"
            onClick={() => onSort(opt.path)}
          >
            {opt.label} {this.renderSortIcon(opt)}
          </span>
        )}
      </div>
    );
  }
}

export default Sorting;
