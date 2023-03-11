import React, { Component } from "react";
import './login_component.css'
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok" && data.type=="professor") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "./profDetails";
        }
        else if (data.status == "ok" && data.type=="etudiant") {
            alert("login successful");
            window.localStorage.setItem("token", data.data);
            window.location.href = "./studDetails";
          }
      });
  }
  render() {
    return (
      <div class="form">
      <form onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label id="ps">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

       

        <div className="d-grid">

        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
       
        
        </div>
      </form>
      </div>
    );
  }
}