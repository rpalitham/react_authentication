import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import * as loginActions from "../Redux/actions/login" 
import "./Auth/auth.css"

class Login extends React.Component{
  
    handleSubmit(e){
      let { userValid, email, password } = this.props.user
      let { login, isEmailValid } = this.props.actions
      if(userValid && password.length > 3) login({email,password})
      isEmailValid(email)
    }

    handleChange(e){
      let { updateLoginDetails } = this.props.actions;
      updateLoginDetails({ [e.target.name]: e.target.value });
    }

    handleFocusChange(e){
      let { userEmailFailure } = this.props.actions;
      userEmailFailure() 
    }

    componentWillReceiveProps(nextProps) {
      if (Boolean(nextProps.user.token.length)) {
        this.props.history.push("/")
      }
    }

    render(){
        let { email, password, userValid, loading} = this.props.user
        return (
          <div className="form-container">
            <div>
              <input
                type="text"
                value={email}
                name="email"
                onFocus={e => this.handleFocusChange(e)}
                onChange={e => this.handleChange(e)}
                placeholder="enter email or username"
                required
              />
            </div>
            {userValid ? <div>
                            <input
                              type="password"
                              value={password}
                              name="password"
                              onChange={e => this.handleChange(e)}
                              placeholder="enter password"
                              required
                            />
                          </div> : null}
             
            <div>
              <button type="submit" onClick={e => this.handleSubmit(e)}>
                { loading 
                          ? <i className="fa fa-circle-o-notch fa-spin" style={{fontSize:"17px"}}></i>
                          :  userValid ? "Login" : "Continue"  }
              </button>
            </div>
            <div style={{ margin: "15px" }}>
              <a href="/auth/forgotpassword" className="forgot-password-link">
                Forgot Password?
              </a>
            </div>
            <div>
              <a href="/auth/Register" className="join-now-link">
                  New to Allies? Join now
              </a>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);