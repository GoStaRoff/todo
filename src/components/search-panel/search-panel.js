import React from "react";

import "./search-panel.css";

export default class SearchPanel extends React.Component {
  onChange = (e) => {
    this.props.onSearchItem(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className="form-control search-input"
        placeholder="Поиск"
        onChange={this.onChange}
      />
    );
  }
}
