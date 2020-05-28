import React from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';

import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import GitHubLogin from 'react-github-login';

import './App.css';

function App() {
  const responseFacebook = (response) => {
    console.log('response Facebook', response);
  }

  // const componentClicked = () => {
  //   console.log('clicked');
  // }

  const responseGoogle = (response) => {
    console.log('response Google ', response);
  }

  const onSuccessGithub = (response) => {
    console.log(response);
  } 
  
  const onFailureGithub = (response) => {
    console.error(response);
  }
  return (
    <div className="App">
      <FacebookLogin
        appId="588578105114630"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
      />
      <GoogleLogin
        clientId="293044082601-jvb14rb5fk4ou2uovna5a6cl6t38qneh.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        // isSignedIn={true}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      <GitHubLogin clientId="38b0a88987a8d59653fc"
        redirectUri=""
        onSuccess={onSuccessGithub}
        onFailure={onFailureGithub}
      />
    </div>
  );
}

export default App;
