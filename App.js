import logo from './logo.svg';
import './App.css';
import React from 'react';
class container extends React.Component {
  constructor(props) {
  super(props);
  // handle initialization activities
  }
  handleChangeEvents(event) {
  //handle change events
  }
  handleSubmitevents(event) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({"firstName":"firstname","lastName":"lastname","password":"password","repass":"cpassword","Contactnum":"contact"});
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch("http://localhost:63958/api/Contacts/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  handlePasswordChange(event){
  //handle password change events
  }

render() {
  return (
  <div className="container">
    <div className="App">
       <form onSubmit={this.handleSubmitevents}>
            <h1><u>REGISTRATION</u></h1>
            <fieldset>
              
                  <label for="firstname">Firstname:</label><br />
                  <input type="text" id="firstname" required/><br />
               
                  <label for="lastname">Lastname:</label><br />
                  <input type="text" id="lastname" required/><br />
               
                  <label for="contact">Contact Number:</label><br />
                  <input type="text" id="contact" required/><br />

                  <label for="password">Password:</label><br />
                  <input type="password" id="password" required/><br />

                  <label for="cpassword">Confirm password:</label><br />
                  <input type="password" id="cpassword" required/><br />
               
            </fieldset>
            <button>Submit</button>
          </form>
     
    </div>
    </div>
  );
  }}
  export default container;