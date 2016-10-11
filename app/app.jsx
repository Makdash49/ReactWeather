var React = require('react');
var ReactDOM = require('react-dom');


ReactDOM.render(
  <h1>Boilerplate app!</h1>,
  document.getElementById('app')
);

//Changes to greeter
// 1. Add message to getInitialState (get default message from props)
// 2. handleNewName function will take the updates as its variable
// 3. render function of Greeter needs to use state instead of the props
// 4. Use placeholder ref for placeholder text.
