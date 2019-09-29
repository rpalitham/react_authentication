import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import AppLayout from './Components/AppLayout';

class ProtectedRoute extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            authenticated : false
        }
    }

    authenticateUser = () => {
        let { id, token } = this.props.user;
        if (Boolean(id.length) && Boolean(token.length)) {
            return true
        }
        return false
    }

    componentWillMount() {
        
        if (this.authenticateUser()) {
           this.setState({
               authenticated : true
           }) 
        }
        else {
            this.props.history.push('/auth/login')
        }
    }

    render(){
        return (
            <Route
                render={(props) => 
                    this.state.authenticated ? 
                    <AppLayout {...this.props} /> : 
                    <Redirect to={{pathname:"/auth/login", state : {from: props.location}}} />
                }
            />
        )
    }
}


const mapStateToProps = state => ({
    user: state.user
});

export default connect(mapStateToProps, null)(ProtectedRoute)