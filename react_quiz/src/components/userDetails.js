import React, { Component } from "react";


export default class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: "",
    };
  }
  componentDidMount() {
    fetch("http://localhost:5000/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: window.localStorage.getItem("token"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userData");
        this.setState({ userData: data.data });
      });
  }
  render() {
    return (
      <div>
       <h3> Hello  {this.state.userData.type}  {this.state.userData.fname}</h3> 
         <h4>your Email: {this.state.userData.email}</h4>
     <div className="pa">
            <p>
              <a href="/addQst">Add qst to the qsts banque</a>
            </p>
            <p >
              <a href="/allQsts">see all qsts?</a>
            </p>
            <p>
              <a href="/addQuiz">create a quiz</a>
            </p>
            <p>
              <a href="/AllQuizs">see all quizs</a>
            </p>
            </div>
        </div>
     
    );
  }
}