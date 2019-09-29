import React from 'react';
import { connect } from "react-redux"
import NavBar from './navbar';
import ProtectedRoute from "../protectedRoute";
import AppLayout from '../Components/AppLayout';

class LandingPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            authenticated : false
        }
    }

    componentWillMount(){
        if (Boolean(this.props.user.token.length && this.props.user.id)){
            this.setState({
                authenticated : true
            })
        }
    }

    render(){
        return(
            <div>
                {this.state.authenticated ? 
                <ProtectedRoute exact path="/" {...this.props} component={AppLayout}></ProtectedRoute> : 
                <div>
                    <NavBar />
                    <div className="main-container">
                    </div>
                </div>}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user : state.user
})

export default connect(mapStateToProps, null)(LandingPage);