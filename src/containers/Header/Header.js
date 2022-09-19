import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from "../../store/actions";
import Navigator from '../../components/Navigator';
import { adminMenu } from './menuApp';
import './Header.scss';
import {LANGUAGES} from '../../utils/constant'
class Header extends Component {
    handleChangeLaunguages = (launguages) => {
        this.props.changeLanguageAppRedux(launguages);
    }
    render() {
        const { processLogout ,language} = this.props;

        return (
            <div className="header-container">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className = "languages">
                    <span
                    onClick = {()=> {this.handleChangeLaunguages(LANGUAGES.VI)}} 
                    className = {language === LANGUAGES.VI ? "languages-vn active" : "languages-vn"}

                    >VN</span>
                    <span
                    onClick = {() => {this.handleChangeLaunguages(LANGUAGES.EN)}} 
                    className ={language === LANGUAGES.EN ? "languages-en active" : "languages-en"}>
                        EN</span>
                    <div className="btn btn-logout" onClick={processLogout} title = "log out">
                    <i className="fas fa-sign-out-alt"></i>
                </div>
                </div>
                {/* nút logout */}
                
            </div>
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
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguageAppRedux : (language) => dispatch(actions.changeLanguageApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
