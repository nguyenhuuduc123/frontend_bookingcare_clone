import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import {emitter} from '../../utils/emitter'
import _ from 'lodash';

class ModalEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
        id : '',
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      address: "",
    };
   
  }
  listenToEmitter(){
    emitter.on('EVEN_CLEAR_MODAL_DATA',() => {
      this.setState({
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        address: "",
      })
    })
  }
  componentDidMount() {
            let {currentUser} = this.props;
            if(currentUser && !_.isEmpty(currentUser)){
                this.setState({
                    id : currentUser.id,
                    email : currentUser.email,
                    password : currentUser.password,
                    firstname : currentUser.firstName,
                    lastname : currentUser.lastName,
                    address : currentUser.address,
                    password : 'hashcode'
                })
            }
       
  }
  toggle = () => {
    this.props.toggleFromParent();
  };
  handleOnChangeInput = (outPut,id) => {
      let copyState = {...this.state};
      copyState[id] = outPut;
      this.setState({
        ...copyState,
      },()=> {
        console.log(this.state)
      }) 
  }
  handleSaveNewUser = ()  => {
  let isValid =   this.checkValidateInput();
  if(isValid) {
    //call api edit user
    this.props.editUser(this.state);
  }
      
  }
  checkValidateInput = ()=> {
    let isValue = true;
    let arr = ['email', 'password', 'firstname','lastname', 'address']
    let index = arr.length;
    for(let i = 0; i < index; i++) {
        if(!this.state[arr[i]]){
          isValue = false;
          alert('missing parameter '+ arr[i]);
          break;
        }
    }
    return isValue
  }
  render() {
        console.log(this.props.currentUser)
    return (
        
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => {
          this.toggle();
        }}
        size="lg"
        className={"model-user-container"}
      >
        <ModalHeader
          toggle={() => {
            this.toggle();
          }}
        >
         Edit new User
        </ModalHeader>
        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>email</label>
              <input
                value = {this.state.email}
                onChange={(e) => this.handleOnChangeInput(e.target.value,"email")}
                type="email"   
                disabled            
              />
            </div>
            <div className="input-container">
              <label>password</label>
              <input
                value = {this.state.password} 
               onChange={(e) => this.handleOnChangeInput(e.target.value,"password")}
              type="password"
              disabled />
              
            </div>
            <div className="input-container">
              <label>firstName</label>
              <input
                value = {this.state.firstname} 
               onChange={(e) => this.handleOnChangeInput(e.target.value,"firstname")}
              type="text" />
            </div>
            <div className="input-container">
              <label>lastName</label>
              <input
                value = {this.state.lastname}
              onChange={(e) => this.handleOnChangeInput(e.target.value,"lastname")}
              type="text" />
            </div>
            <div className="input-container">
              <label>address</label>
              <input
                value = {this.state.address}
              onChange={(e) => this.handleOnChangeInput(e.target.value,"address")} 
              type="text" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary but"
            // toggle ={() => {
            //   this.toggle();
            // }}
            onClick = {() => {
              this.handleSaveNewUser();
            }}
          >
          save changes
          </Button>
          <Button
            color="secondary but"
            onClick = {() => {
              this.handleAddNewUser();
            }}
          >
            cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalEditUser);
