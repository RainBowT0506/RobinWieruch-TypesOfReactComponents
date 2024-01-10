var localStorageMixin = {
  getInitialState: function () {
    return {
      value: localStorage.getItem("myValueInLocalStorage") || "",
    };
  },

  setLocalStorage: function (value) {
    localStorage.setItem("myValueInLocalStorage", value);
  },
};

var App = React.createClass({
  mixins: [localStorageMixin],

  componentDidUpdate: function () {
    this.setLocalStorage(this.state.value);
  },

  onChange: function (event) {
    this.setState({ value: event.target.value });
  },

  render: function () {
    return (
      <div>
        <h1>Hello React "createClass" Component with Mixin!</h1>

        <input value={this.state.value} type="text" onChange={this.onChange} />

        <p>{this.state.value}</p>
      </div>
    );
  },
});
