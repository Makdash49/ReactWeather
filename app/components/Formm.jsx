var React = require('react');

var Formm = React.createClass({
  render: function () {
    return (
      <form>
        <input type='text' placeholder='Enter a city' ref='city'/>
      </form>
    );
  }
});

module.exports = Formm;
