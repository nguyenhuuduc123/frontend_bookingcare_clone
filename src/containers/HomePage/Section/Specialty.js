import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
import { FormattedMessage } from "react-intl";
import Slider from "react-slick";

import specialtyIMG from "../../../assets/images/specialty/picture2.jpg";
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

class Specialty extends Component {
  render() {
    return (
      <div className="section-share section-specialty">
        <div className="section-container">
          <div className="section-header">
            <span>chuyên khoa phổ biến</span>
            <button> xem thêm</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
