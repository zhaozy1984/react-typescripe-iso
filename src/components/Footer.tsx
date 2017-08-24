import * as React from "react";
export default class Footer extends React.Component<{filter,onFilterChange}, {}> {
  render() {
    return (
      <p><span>Show:</span>
        {this.renderFilter('SHOW_ALL', 'All')}
        {this.renderFilter('SHOW_COMPLETED', 'Completed')}
        {this.renderFilter('SHOW_ACTIVE', 'Active')}
      </p>
    )
  }
  renderFilter(filter, name) {
    if (filter === this.props.filter) {
      return <span>{name}</span>
    }
    return (
      <a href='#' onClick={e => {
            e.preventDefault();
            this.props.onFilterChange(filter);
          }}>
        <span>{name}</span>
      </a>
    )
  }
}