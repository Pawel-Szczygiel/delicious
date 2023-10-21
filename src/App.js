
function App() {
  return (
    <div>
        <h1>hello  </h1>
        <p>
        {process.env.REACT_APP_API_KEY}
        </p>
        <pre>{process.env.REACT_APP_API_KEY}</pre>
    </div>
  );
}

export default App;
