import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as RegisterActions from "../Redux/actions/register";
import "./Auth/auth.css"

class Register extends React.Component {
  handleSubmit(e) {
    let { register } = this.props.actions;
    register(this.props.register);
  }
  handleChange(e) {
    let { updateRegistrationDetails } = this.props.actions;
    updateRegistrationDetails({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (Boolean(nextProps.register.success)) {
      this.props.history.push("/auth/login");
    }
  }

  render() {
    let { username, email, password, phone, loading } = this.props.register;
    return (
      <div className="form-container">
        <div>
          <input
            type="text"
            value={username}
            name="username"
            onChange={e => this.handleChange(e)}
            placeholder="enter username"
          />
        </div>
        <div>
          <input
            type="text"
            value={email}
            name="email"
            onChange={e => this.handleChange(e)}
            placeholder="enter email address"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            name="password"
            onChange={e => this.handleChange(e)}
            placeholder="enter password"
          />
        </div>
        <div>
          <input
            type="text"
            value={phone}
            name="phone"
            onChange={e => this.handleChange(e)}
            placeholder="enter your phone number"
          />
        </div>
        <div>
          <button onClick={e => this.handleSubmit(e)}> 
              {  loading ? <i class="fa fa-circle-o-notch fa-spin" style={{ fontSize: "17px" }}></i> : "Register"}</button>
        </div>
        <div>
          <a href="/auth/login" className="login-link">
            Already have an account? Sign In
          </a>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  register : state.register
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(RegisterActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);