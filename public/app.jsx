var GreeterMessage = React.createClass({
  render: function () {
    var name = this.props.name;
    var message = this.props.message;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>{message}</p>
      </div>
    );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function (e) {
    e.preventDefault();

    var updates = {};
    var name = this.refs.name.value;

    if (name.length > 0) {
      this.refs.name.value = '';
      updates.name = name;
    }

    //validate the message too here.

    this.props.onNewName(updates);
  },
  render: function () {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
        </form>

      </div>
    )
  }
});


var Greeter = React.createClass({
  getDefaultProps: function (){
    return {
      name: 'React',
      message: 'This is the default message'
    };
  },
  getInitialState: function (){
    return {
      name: this.props.name
    };
  },
  handleNewName: function (name) {
    this.setState({
      name: name
    });
  },
  render: function () {
    var name = this.state.name;
    var message = this.props.message;
    return (
      <div>
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewName={this.handleNewName}/>


      </div>
    );
  }
});

var firstName="Mark";
var myMessage="What a nice course!"

ReactDOM.render(
  <Greeter name={firstName}/>,
  document.getElementById('app')
);

//Changes to greater
// 1. Add message to getInitialState (get default message from props)
// 2. handleNewName function will take the updates as its variable
// 3. render function of Greeter needs to use state instead of the props
// 4. Use placeholder ref for placeholder text.
