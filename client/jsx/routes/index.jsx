var React = require("react");
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

module.exports = React.createClass({
	render () {
		return (<div>
			<h1>Welcome to the SGD Curation Center</h1>
			<ul>
				<li><span className="glyphicon glyphicon-list"> <Link to="papers">Papers</Link></span></li>
			</ul>
		</div>);
	}
});
