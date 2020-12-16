import React from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends React.Component {
  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];
  render() {
    const { filter, onFilterChange } = this.props;
    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      return (
        <button
          type="button"
          key={name}
          className={isActive ? "btn btn-info" : "btn btn-outline-secondary"}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });
    return <div className="btn-group status-filter">{buttons}</div>;
  }
}
