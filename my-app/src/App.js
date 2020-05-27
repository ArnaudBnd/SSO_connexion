import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';

import './App.css';

function App() {
  const responseFacebook = (response) => {
    console.log('response Facebook', response);
  }

  const componentClicked = () => {
    console.log('clicked');
  }

  const responseGoogle = (response) => {
  console.log('response Google ', response);
}

  return (
    <div className="App">
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        />
        <br/>
        <GoogleLogin
          clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />
    </div>
  );
}

export default App;
