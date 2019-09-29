import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as loginActions from "../../Redux/actions/login";
import Nav from "./nav"
import "./index.css"

class AppLayout extends React.Component {
  
  render() {
    return (
      <div className="app-layout-container">
        <div className="left-container">
          <div className="profile-container">
            <div>
              <i className="fa fa-user-circle profile-icon" aria-hidden="true"></i>
            </div>
            <div className="profile-name">
              <label>{this.props.user.username}</label>
            </div>
          </div>
          <div className="options-container">
              <div>
                <i className="fa fa-comments" aria-hidden="true"></i>
                <label>MESSAGING</label>
              </div>
              <div>
                <i className="fa fa-tasks" aria-hidden="true"></i>
                <label>TASKS</label>
              </div>
              <div>
                <i className="fa fa-calendar-check-o" aria-hidden="true"></i>
                <label>CALENDER</label>
              </div>
              <div>
                <i className="fa fa-book" aria-hidden="true"></i>
                <label>NOTES</label>
              </div>
              <div>
                <i className="fa fa-cog" aria-hidden="true"></i>
                <label>SETTINGS</label>
              </div>
          </div>
        </div>
        <div className="right-container">
          <Nav {...this.props}/>
          <div className="feed-container"></div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(loginActions, dispatch)
});

export default connect(null, mapDispatchToProps)(AppLayout);
