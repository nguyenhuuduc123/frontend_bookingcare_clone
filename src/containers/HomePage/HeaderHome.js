import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderHome.scss'
import {FormattedMessage} from 'react-intl';
import {LANGUAGES} from '../../utils'
import { changeLanguageApp } from '../../store/actions/appActions';
class Header extends Component {
     changeLanguage = (language) => {
        this.props.changeLanguageAppRedux(language);
     }
    render() {  
        let language = this.props.language;
      
        return (
            <React.Fragment>
           <div className = "home-header-container">
                <div className = "home-header-content">
                    <div className = "left-content">
                        <i className = "fas fa-bars" > </i>
                        <div className = "header-logo"></div>
                    </div>
                    <div className = "center-content">
                            <div className = "child-center-content">
                            <div><b><FormattedMessage id = "homeheader.speciality"/></b></div>
                                        <div className = "sub-title"><FormattedMessage id = "homeheader.searchdoctor"/></div>

                            </div>
                            <div className = "child-center-content">
                                        <div><b><FormattedMessage id = "homeheader.heath-facility"/></b></div>
                                        <div className = "sub-title"><FormattedMessage id = "homeheader.select-room"/></div>
                                </div>
                                <div className = "child-center-content">
                                <div><b><FormattedMessage id = "homeheader.doctor"/></b></div>
                                        <div className = "sub-title" ><FormattedMessage id = "homeheader.select-doctor"/></div>

                                </div>
                                <div className = "child-center-content">
                                <div><b><FormattedMessage id = "homeheader.fee"/></b></div>
                                        <div className = "sub-title"><FormattedMessage id = "homeheader.check-health"/></div>

                                </div>
                    </div>
                    <div className = "right-content">
                        <div className ="support">
                            <i className = "fas fa-question-circle"></i>
                            <FormattedMessage id = "homeheader.support"/>
                        </div>
                        <div className = {language === LANGUAGES.VI ? "flag language-vi active" :"flag language-vi" }><span
                        onClick = {() => {this.changeLanguage(LANGUAGES.VI)}}
                        > vn</span></div>   
                        <div className = {language === LANGUAGES.EN ? "flag language-en active" :"flag language-en" }> <span
                        onClick = {() => {this.changeLanguage(LANGUAGES.EN)}}
                        > en</span></div>
                    </div>
                </div>              
           </div>
           <div className = "home-header-banner">
           <div className = "content-up">
           <div className = "title1">
                <FormattedMessage id = "banner.title1"/>
            </div>
            <div className = "title2">
            <FormattedMessage id = "banner.title2"/>
            </div>
            <div className = "search">
            <i className="fa fa-search"></i>
                <input type="text" placeholder="tìm chuyên khoa khám bệnh"/>
                
            </div>
           </div>   
           <div className = "content-down"> <div className = "options">
            <div className = "option-child">
                <div className = "icon-child"><i className="fas fa-flask"></i></div>
                <div className = "text-child"> <FormattedMessage id = "banner.child1"/></div>
            </div>
            <div className = "option-child">
                <div className = "icon-child"><i className="far fa-hospital"></i></div>
                <div className = "text-child"><FormattedMessage id = "banner.child2"/></div>
            </div>
            <div className = "option-child">
                <div className = "icon-child"><i className="far fa-hospital"></i></div>
                <div className = "text-child"><FormattedMessage id = "banner.child3"/></div>
            </div>
            <div className = "option-child">
                <div className = "icon-child"><i className="far fa-hospital"></i></div>
                <div className = "text-child"><FormattedMessage id = "banner.child4"/></div>
            </div>
            <div className = "option-child">
                <div className = "icon-child"><i className="far fa-hospital"></i></div>
                <div className = "text-child"><FormattedMessage id = "banner.child5"/></div>
            </div>
            <div className = "option-child">
                <div className = "icon-child"><i className="far fa-hospital"></i></div>
                <div className = "text-child"><FormattedMessage id = "banner.child6"/></div>
            </div>
           
            
            
            
            
            </div></div>
           </div>
           </React.Fragment>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language : state.app.language,
       

    };
};

const mapDispatchToProps = dispatch => {    
    return {
        changeLanguageAppRedux : (language) => dispatch(changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
