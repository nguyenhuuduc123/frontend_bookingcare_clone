import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import "./About.scss";
class About extends Component {
  render() {
    return (
      <div className="section-share section-about">
        <div className="section-about-header">
          <span> truyền thông nói về Nguyễn Hữu Đức</span>
        </div>
        <div className="section-about-content">
          <div className="content-left">
            <iframe
              src="https://www.youtube.com/embed/vLffjW9r_SU?list=RDvLffjW9r_SU"
              height="250px"
              width="60%"
              title="[Vietsub + Kara MV] All about you( 全部都是 ) - Dragon Pig (feat. CNBALLER & CLOUD WANG)"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div className="content-right">
            Object-oriented programming (OOP) is a method of structuring a
            program by bundling related properties and behaviors into individual
            objects. In this tutorial, you’ll learn the basics of
            object-oriented programming in Python. Conceptually, objects are
            like the components of a system. Think of a program as a factory
            assembly line of sorts. At each step of the assembly line a system
            component processes some material, ultimately transforming raw
            material into a finished product. An object contains data, like the
            raw or preprocessed materials at each step on an assembly line, and
            behavior, like the action each assembly line component performs. In
            this tutorial, you’ll learn how to: Create a class, which is like a
           
          </div>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
