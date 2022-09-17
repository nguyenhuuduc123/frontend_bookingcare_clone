import React, { Component } from "react";
import { connect } from "react-redux";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import specialtyIMG from "../../../assets/images/specialty/handbook.png";


class HandBook extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span>cẩm nang</span>
            <button> tất cả bài viết</button>  
          </div>
          <div className="section-body">
            <Slider {...this.props.settings}>
              <div className="section-customize">
                <img src={specialtyIMG} />
                <div> cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <img src={specialtyIMG} />
                <div> cơ xương khớp</div>
              </div>
              <div className="specialty-customize">
                <img src={specialtyIMG} />
                <div> cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <img src={specialtyIMG} />
                <div> cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <img src={specialtyIMG} />
                <div> cơ xương khớp</div>
              </div>
              <div className="section-customize">
                <img src={specialtyIMG} />
                <div> cơ xương khớp</div>
              </div>
            </Slider>
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

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
