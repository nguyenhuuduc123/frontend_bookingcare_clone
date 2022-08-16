import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./userManage.scss";
import { connect } from "react-redux";
import { getAllUser,createNewUser } from "../../services/index";
import ModalUser from './ModalUser';

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      arrUsers: [],
      isOpenModalUser : false,
    };
  }
  async componentDidMount() {
   await this.getAllUserFromReact();
  }
  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser : true,
    })
  }


  toggleUserModal = () => {
    this.setState({
      isOpenModalUser : !this.state.isOpenModalUser,
    })
  } 
  getAllUserFromReact = async () => {
    let response = await getAllUser("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  createNewUser = async(data) => {
    try{
   let response =  await createNewUser(data);
   if(response && response.message.errCode !== 0){
    
    alert(response.message.message);
   }else {
    await this.getAllUserFromReact();
    this.setState({
      isOpenModalUser : false
    })
   }
   
    }catch(e){
      console.log(e)
    }
  }
  
  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen  = {this.state.isOpenModalUser}
          toggleFromParent = {this.toggleUserModal}
          createNewUser  = {this.createNewUser}    
        />  
        <div className="title text-center">manage user with me</div>
        <div className="mx-1 button-st">
         <button className="btn btn-primary px-3"
         onClick = {()=> {this.handleAddNewUser()}}><i className ="fas fa-plus mx-2"></i>add new user</button>
          </div>
        <div className="user-table mt-3 mx-3">
          <table id="customers">
            <thead>
              <tr>
                <th>email</th>
                <th>first name</th>
                <th>last name</th>
                <th>addres</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {arrUsers &&
                arrUsers.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.email}</td>
                      <td>{user.firstName}</td>
                      <td>{user.lastName}</td>
                      <td>{user.address}</td>
                        <td>
                            <button>delete</button>
                            <button>edit</button>
                        </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
