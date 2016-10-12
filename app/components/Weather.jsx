var React = require('react');
var Formm = require('Formm');
var Message = require('Message');

var Weather = React.createClass({
  render: function () {
    return (
      <div>
        <h3>Weather Component</h3>
        <Formm/>
        <Message/>
      </div>
    );
  }
});

module.exports = Weather;
