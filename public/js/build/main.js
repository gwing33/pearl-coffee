/** @jsx React.DOM */
'use strict';



var App = React.createClass({displayName: 'App',
  render: function() {
    return React.DOM.div(null, "Weee!");
  }
});

// React.renderComponent(<App />, document.getElementById('container'));
