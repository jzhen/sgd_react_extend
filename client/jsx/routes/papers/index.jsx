"use strict";
var React = require("react");
var Router = require("react-router");
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var papers = require("./papers.js");


var Index = React.createClass({
  getInitialState() {
    return {
      data: papers,
      nameFilter: ''
    };
  },

  handleFilterUpdate: function(filterValue) {
    this.setState({
      nameFilter: filterValue
    });
  },

  render () {
    var displayedItems = this.state.data.filter(function(item) {
      var match = item.title.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      return (match !== -1);
    }.bind(this));

    return (
      <div>
        <h1>Papers</h1>
        <Filters updateFilter={this.handleFilterUpdate} />
        <PaperList items={displayedItems} />
      </div>
    );
  }

});

var PaperList = React.createClass({
  render: function() {
    var listNodes = this.props.items
      .map( (d, i) => {
        return <div key={"paperList" + d.id}>
          <Link to="paper" params={d}>{d.title}</Link>
          <hr />
        </div>;
      });
    return (
      <div>
        {listNodes}
      </div>);
  }
});

var Filters = React.createClass({
  handleFilterChange: function() {
    var value = this.refs.filterInput.getDOMNode().value;
    this.props.updateFilter(value);
  },
  render: function() {
    return (
      <div>
        <input type="text" className="form-control search-filter" ref="filterInput" onChange={this.handleFilterChange} placeholder="Search papers" />
        <br />
      </div>
    )
  }
});

module.exports = Index;
