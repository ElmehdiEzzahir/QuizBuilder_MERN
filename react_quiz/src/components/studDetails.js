import React, { Component } from "react";
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

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
        <h3 id="h3">Hello {this.state.userData.fname} {this.state.userData.lname}</h3>
        <Link id="h3a"to={`/studentQuizs/${this.state.userData._id}`} key={this.state.userData._id} >
                      <p>view the disponible quizs </p>
                    </Link>
        
       
      </div>
    );
  }
}