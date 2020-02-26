import React, { Component } from "react";
import { connect } from "react-redux";
import { userAction } from "../../redux/action/action";

class FirstReduxPage extends Component {
  state = { isButtonClicked: false };
  handleGetClick = () => {
    this.props.getUsersList();
    console.log(this.props.getUsersList());
    
    this.setState({ isButtonClicked: true });
  };

  render() {
    const {isButtonClicked} = this.state;
    return (
      <>
        <table border="2" class="table">
          {isButtonClicked &&
            <tbody>
              <tr>
                <td>ID</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Location</td>
              </tr>
              {this.props.userList.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.fname}</td>
                  <td>{user.lname}</td>
                  <td>{user.location}</td>
                </tr>
              ))}
            </tbody>
          }
        </table><br/>
        <button
          type="button"
          class="btn btn-success"
          onClick={this.handleGetClick}
        >
          Get Details
        </button><br/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  userList: state.users.users // 1st users points to reducer
  
});

const mapDispatchToProps = dispatch => ({
  getUsersList: () => dispatch(userAction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstReduxPage);
