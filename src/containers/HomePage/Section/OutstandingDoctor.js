import './OutstandingDoctor.scss';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import specialtyIMG from "../../../assets/images/specialty/picture3.jpg";
import Slider from "react-slick";
class OutstandingDoctor extends Component {

    render() {
       

        return (
            <div className="section-share section-outstanding-doctor">
            <div className="section-container">
              <div className="section-header">
                <span>bác sĩ  nổi  bật</span>
                <button> xem thêm</button>
              </div>
              <div className="section-body">
                <Slider {...this.props.settings}>
                <div className="section-customize ">                 
                   <img src={specialtyIMG} className="custom-img" />
                    <div className = "section-block ">
                        <div className = "section-content">content dfdfdfdfdfdfdfdfdf</div>
                        <div className = "section-content2"> tên bác sĩ</div>
                        </div>
                  </div>
                  <div className="section-customize ">                 
                   <img src={specialtyIMG} className="custom-img" />
                    <div className = "section-block ">
                        <div className = "section-content">content dfdfdfdfdfdfdfdfdf</div>
                        <div className = "section-content2"> tên bác sĩ</div>
                        </div>
                  </div>
                  <div className="section-customize ">                 
                   <img src={specialtyIMG} className="custom-img" />
                    <div className = "section-block ">
                        <div className = "section-content">content dfdfdfdfdfdfdfdfdf</div>
                        <div className = "section-content2"> tên bác sĩ</div>
                        </div>
                  </div>
                  <div className="section-customize ">                 
                   <img src={specialtyIMG} className="custom-img" />
                    <div className = "section-block ">
                        <div className = "section-content">content dfdfdfdfdfdfdfdfdf</div>
                        <div className = "section-content2 "> tên bác sĩ</div>
                        </div>
                  </div>
                  <div className="section-customize ">                 
                   <img src={specialtyIMG} className="custom-img" />
                    <div className = "section-block ">
                        <div className = "section-content">content dfdfdfdfdfdfdfdfdf</div>
                        <div className = "section-content2"> tên bác sĩ</div>
                        </div>
                  </div>
                  <div className="section-customize ">                 
                   <img src={specialtyIMG} className="custom-img" />
                    <div className = "section-block ">
                        <div className = "section-content">content dfdfdfdfdfdfdfdfdf</div>
                        <div className = "section-content2"> tên bác sĩ</div>
                        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(OutstandingDoctor);
