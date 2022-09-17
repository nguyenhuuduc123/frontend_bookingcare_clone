import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import './HomeFooter.scss'




class HomeFooter extends Component {
  render() {
    return (
      <div className = "home-footer">
          <p>&copy; 2022 nguyễn hữu đức.more infomation , please visit 
            <a
            target = '_blank'
            className = "info" 
            href = "https://www.facebook.com/profile.php?id=100066284267762"> here</a></p>
      </div> 
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    language: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
