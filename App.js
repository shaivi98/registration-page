import logo from './logo.svg';
import App from Login;
import './App.css';

function App() {
  return (
  <div className="container">
    <div className="App">
       <form>
            <h1><u>REGISTRATION</u></h1>
            <fieldset>
              
                  <label for="firstname">Firstname:</label><br />
                  <input type="text" id="firstname" required/><br />
               
                  <label for="lastname">Lastname:</label><br />
                  <input type="lastname" id="lastname" required/><br />
               
                  <label for="contact">Contact Number:</label><br />
                  <input type="contact" id="contact" required/><br />
               
            </fieldset>
            <button onclick="App.js">Submit</button>
          </form>
     
    </div>
    </div>
  );
}

export default App;