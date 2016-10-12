var React = require('react');

var WeatherMessage = React.createClass({
  render: function () {
    var temp = this.props.temp;
    var location = this.props.location;
    return (
      <h2>It's {temp} in {location}.</h2>
    );
  }
});

module.exports = WeatherMessage;
