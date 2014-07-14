'use strict';

var App = App || {};

(function() {

  App.Main = React.createClass({
    render: function() {
      return <div>Weee!</div>;
    }
  });

  var appMain = App.Main;

  React.renderComponent(<appMain />, document.getElementById('container'));

  // Render Out the Main App

})();
