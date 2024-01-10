const App = () => {
  const [value, setValue] = React.useState(
    localStorage.getItem("myValueInLocalStorage") || ""
  );

  React.useEffect(() => {
    localStorage.setItem("myValueInLocalStorage", value);
  }, [value]);

  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React Function Component!</h1>

      <input value={value} type="text" onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};
