import React, { Component } from "react";
import axios from "axios";

class RedirectExample extends Component {
  state = { bool: false, users: [], getValue: "", id: 0 };

  handleSubmit = () => {
    /*
            npm install react-axios
            Also install the required peer dependancies if you have not already done so:
            $ npm install axios
            $ npm install react
            $ npm install prop-types
        */

    axios.get("https://api.github.com/users").then(response => {
      const users = response.data;
      this.setState({ users });
    });
  };

  handleClick = e => {
    if (e.target !== null && e.target.nodeName === "A") {
      console.log(e.target.id);
      this.setState({
        id: e.target.id,
        bool: true
      });
    }
   // e.preventDefault();
  };

  render() {
    const { users, bool, id } = this.state;
    console.log(users);
    return (
      <div>
        <input type="button" value="Submit" class="btn btn-primary" onClick={this.handleSubmit} />
        <ul id="ul-item">
          {users.map(item => (
            <li key={item.id}>
              <a href="#" id={item.id} onClick={this.handleClick}>
                {item.id}
                {bool && (id == item.id) === true ? (
                  <p>
                    For {item.id} Login is : {item.login}
                  </p>
                ) : null}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RedirectExample;
