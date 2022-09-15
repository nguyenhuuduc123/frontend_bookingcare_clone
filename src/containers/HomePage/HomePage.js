import React, { Component } from 'react';
import { connect } from 'react-redux';
import HeaderHome from './HeaderHome'
import Specialty from './Section/Specialty'
class HomePage extends Component {

    render() {
       

        return (
           <div>
                <HeaderHome/>
                <Specialty/>
                <div style= {{height:'300px'}}></div>
           </div>   
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);