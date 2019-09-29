import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as loginActions from "../../Redux/actions/login" 
import Login from "../login";
import Register from "../register";
import "./auth.css";
import logo from "../../Images/logo.png"
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { GoogleLogin } from 'react-google-login';

class Auth extends React.Component {

  responseFacebook = (response) => {
    console.log(response);
    let { login } = this.props.actions
    let payload = { ...response, authType: "facebook"}
    // if(response.accessToken.length > 0 ) login(payload)
  }

  responseGoogle = (response) => {
    console.log("response", response)
    let { login } = this.props.actions
    if (response.profileObj){
      let payload = { authType: "google", name : response.profileObj.name , userId : response.profileObj.googleId, email : response.profileObj.email}
      login(payload)
    }
  }

  componentWillMount() {
    console.log("component will recieve props", this.props.user)
    if (Boolean(this.props.user.token.length)) {
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <div className="auth-container">
        <div className="brand">
          <img alt="logo" src={logo}></img>
        </div>
        <div className="brand" style={{ margin: "10px" }}>
          <label>Allies</label>
        </div>
        <div className="register-container">
          <FacebookLogin
            appId="1411066522375167"
            fields="name,email,picture"
            callback={this.responseFacebook}
            render={renderProps => (
              <button onClick={renderProps.onClick}><i className="fa fa-facebook-square" aria-hidden="true"></i>
                <label>Facebook</label></button>
            )}
          />
          <GoogleLogin
            clientId="937327008143-egc9t43tacabibtdhjpa7o09jqp6509r.apps.googleusercontent.com"
            render={renderProps => (
              <button onClick={renderProps.onClick} disabled={renderProps.disabled}><i className="fa fa-envelope" aria-hidden="true"></i>
                <label>Gmail</label></button>
            )}
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <p> - or using email - </p>
        </div>
        <Switch>
          <Route path="/auth/register" component={Register}></Route>
          <Route path="/auth/login" component={Login}></Route>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user : state.user
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
