const React        					= require("react");
const ReactDOM 							= require("react-dom");
const {Route, Router, IndexRoute, hashHistory} = require("react-router");



// Load foundation
$(document).foundation();

// App css
require("style!css!sass!applicationStyles")


ReactDOM.render(
<p>BoilerPlate 3 Project</p>,
document.getElementById("app")
);

