import React from 'react'
//import axios from 'axios'

const users = [
    {
        id: 1,
        fname: "John",
        lname: "Doe",
        location: "LA"
    },
    {
        id: 2,
        fname: "Nick",
        lname: "Jonas",
        location: "New York"
    },
    {
        id: 3,
        fname: "Joe",
        lname: "Jonas",
        location: "London"
    }
]
const userService = () => {
    /* axios.get("https://api.github.com/users").then(response => {
        const users = response.data;        
    }); */
    return users;
}

export default userService;
