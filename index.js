var App = React.createClass({
  getInitialState: function () {
    return {
      value: localStorage.getItem("myValueInLocalStorage") || "",
    };
  },

  componentDidUpdate: function () {
    localStorage.setItem("myValueInLocalStorage", this.state.value);
  },

  onChange: function (event) {
    this.setState({ value: event.target.value });
  },

  render: function () {
    return (
      <div>
        <h1>Hello React "createClass" Component!</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  },
});
