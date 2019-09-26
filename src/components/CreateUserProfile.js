import React, {Component} from 'react';
import {connect} from 'react-redux';
import createProfileAction from '../actions/createProfileAction'
import { bindActionCreators } from 'redux';


class CreateProfile extends Component{

    state = {
        nameFirst: "",
        nameLast: "",
        email: "",
        phone: "",
        password: ""
    }
    
    handleFirstNameChange = (e) => {
        this.setState({nameFirst:e.target.value})
    }

    handleLastNameChange = (e) => {
        this.setState({nameLast:e.target.value})
    }

    handleEmailChange = (e) => {
        this.setState({email:e.target.value})
    }

    handlePhoneChange = (e) => {
        this.setState({phone:e.target.value})
    }

    handlePasswordChange = (e) => {
        this.setState({password:e.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        const userData = [...this.state]
        this.props.createProfileAction(userData)
    }
    
    render(){
        return(
            //NAME
            //EMAIL
            //TITLE
            //SALARY RANGE
            <div className="container">
                <h1>Create Profile</h1>
                <div className="row">
                    <form action="submit" className="col s12">

                    <div className="row">
                        <div className="input-field col s6">
                            <input value={this.state.nameFirst} onChange={this.handleFirstNameChange} placeholder="First Name" id="first_name" type="text" className="validate"/>
                        <label htmlFor="first_name"></label>
                        </div>
                        <div className="input-field col s6">
                            <input value={this.state.nameLast} onChange={this.handleLastNameChange} placeholder="Last Name" id="last_name" type="text" className="validate"/>
                        <label htmlFor="last_name"></label>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.email} onChange={this.handleEmailChange} placeholder="Email" id="disabled" type="email" className="validate"/>
                        <label htmlFor="email"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.phone} onChange={this.handlePhoneChange} placeholder="Phone Number" id="phone" type="number" className="validate"/>
                        <label htmlFor="phone_number"></label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input value={this.state.password} onChange={this.handlePasswordChange} placeholder="password" id="pass" type="password" className="validate"/>
                        <label htmlFor="pass"></label>
                        </div>
                    </div>

                        <div className="file-field input-field ">
                            <div className="waves-effect waves-light btn-large blue-grey darken-2">
                                <span>File</span>
                                <input type="file" multiple />
                            </div>

                            <div className="file-path-wrapper">
                                <input className="file-path validate" type="text" placeholder="Upload one or more files"/>
                            </div>
                        </div>
                    <div className="row">
                        <input onClick={this.handleFormSubmit}className="waves-effect waves-light btn-large blue-grey darken-2" type="submit" value="submit" />
                    </div>
                    </form>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {

    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        createProfileAction: createProfileAction
    },dispatch)
}

// export default CreateProfile;
export default connect(null,mapDispatchToProps)(CreateProfile)