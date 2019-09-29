import React from "react";
import "./index.css"

class Logout extends React.Component {

    handleLogout = (e) => {
        this.props.actions.logout();
    };

    render() {
        console.log("this user", this.props.user)
        return (
            <div className="app-logout-button">
                <i className="fa fa-sign-out app-user-logout" onClick={e => this.handleLogout(e)} ></i>
            </div>
        );
    }
}

export default Logout;
