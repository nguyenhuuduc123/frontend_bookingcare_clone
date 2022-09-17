import './MedicalFacility.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import specialtyIMG from "../../../assets/images/specialty/picture1.jpg";
import Slider from "react-slick";
class MedicalFacility extends Component {

    render() {
       

        return (
            <div className="section-share section-medical-facility">
            <div className="section-container">
              <div className="section-header">
                <span>cơ sở y tế nổi  bật</span>
                <button> xem thêm</button>
              </div>
              <div className="section-body">
                <Slider {...this.props.settings}>
                  <div className="section-customize">
                    <img src={specialtyIMG} />
                    <div> Hệ thống thu cúc1</div>
                  </div>
                  <div className="section-customize">
                    <img src={specialtyIMG} />
                    <div> Hệ thống thu cúc2</div>
                  </div>
                  <div className="section-customize">
                    <img src={specialtyIMG} />
                    <div> Hệ thống thu cúc3</div>
                  </div>
                  <div className="section-customize">
                    <img src={specialtyIMG} />
                    <div> Hệ thống thu cúc4</div>
                  </div>
                  <div className="section-customize">
                    <img src={specialtyIMG} />
                    <div> Hệ thống thu cúc5</div>
                  </div>
                  <div className="section-customize">
                    <img src={specialtyIMG} />
                    <div> Hệ thống thu cúc6</div>
                  </div>
                </Slider>
              </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
