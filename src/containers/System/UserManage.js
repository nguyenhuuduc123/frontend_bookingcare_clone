import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./userManage.scss";
import { connect } from "react-redux";
import { getAllUser } from "../../services/index";
class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
    };
  }
  async componentDidMount() {
    let response = await getAllUser("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  }

  render() {
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <div className="title text-center">manage user with me</div>
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
