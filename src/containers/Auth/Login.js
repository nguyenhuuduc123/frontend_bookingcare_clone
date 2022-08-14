import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";

import './Login.scss';
import { FormattedMessage } from 'react-intl';
import {handleLogin} from '../../services';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';


class Login extends Component {
    constructor(props) {
        super(props);
       this.state = {
            username : '',
            password : '',
            errorMessage : ''
       }
    }
    handleonChangeUserName  = (e) => {
           this.setState({ username : e.target.value
           })   
    }
    handleonChangePassWord = (e) => {
        this.setState({ password : e.target.value
        })   
 }
 handleLogin = async () => {
    this.setState({ 
        errorMessage : ''
    })
   try{
  let data =   await handleLogin(this.state.username,this.state.password)
  if(data && data.errorCode !== 0){
    this.setState({ 
        errorMessage : data.message
    })
    }
    if(data && data.errorCode === 0){
       this.props.userLoginSuccess(data.user)
        console.log("login sussess")
    }

  
   }catch(e){
       if(e.response){
        if(e.response.data){
            this.setState({ 
                errorMessage : e.response.data.message
            })
        }

       }
   }
 }  

    render() {

        return (

            <div className="login-background">
                <div className="login-container">
                    <div className="login-content row"> 
                        <div className="col-12  text-login">Login</div>
                        <div className="col-12 form-group login-input">
                            <label>UserName</label>
                            <input type = "text" className ="form-control" 
                            placeholder = "Enter your name" value = {this.state.username}   
                            onChange = {(e)=> this.handleonChangeUserName(e)}/>
                            
                        </div>
                        
                        <div className="col-12 form-group login-input">
                            <label>Password</label>
                            <input type = "password" className ="form-control" 
                            placeholder = "Enter your password" 
                            value = {this.state.password}
                            onChange = {(e)=> this.handleonChangePassWord(e)}/>
                        </div>
                        <div className = "col-12" style = {{color  : 'red'}}>
                            {this.state.errorMessage}
                        </div>
                        <div className="col-12 ">
                            <button className="btn-login"
                            onClick={()=> {
                                    this.handleLogin()
                            }}>
                                Login
                            </button>
                        </div>
                        <div className="col-12">    
                            <span className="forget-password">forgot your password</span>
                        </div>
                        <div className="col-12 text-center">
                                <span className="text-other-login">or login with:</span>
                                <div className="col-12 social-login">
                                <i className="fab fa-google-plus-g"></i>
                                <i className="fab fa-facebook"></i>
                                </div>
                        </div>
                    
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
      //  adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
   // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess : (userInfo) => dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
