import './App.css';

  function App() {
    return (
    <div className="container">
    <div className="App">
      <form>
        <h1><u>Login</u></h1>
        <label>
          Username:
          <input type="text"  />
        </label>
        <label>
          Password:
          <input type="password"  />
        </label>
        <button><input type="submit" value="Submit" /></button>
      </form>
      </div>
      </div>
    );
  }


export default App;