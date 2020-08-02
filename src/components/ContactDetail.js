/**
 * @author Mihir Patel
 */
import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.css";
import Axios from "axios";

//Nodemiler
//("use strict");
const nodemailer = require("nodemailer");

export default class ContactDetail extends Component {
  constructor(props) {
    super();

    this.state = this.defaultState();
  }

  setDefaultState() {
    this.setState(this.defaultState());
  }

  defaultState() {
    return {
      name: "",
      email_id: "",
      contact_no: "",
      message: "",
      state: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    Axios.post("/contact/submitform", this.state)
      .then((res) => {
        window.alert("Your request has been recieved successfully")
        this.setDefaultState()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { name, email_id, contact_no, message, state } = this.state;
    return (
      <div>
        <div
          className="container-fluid"
          style={{
            paddingTop: " 10px",

            paddingBottom: "20px",
            backgroundColor: "#00979d",
            color: "white",
          }}
        >
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1>Contact Us</h1>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: "10px" }}>
          <div className="row text-center padding" style={{ padding: "20px" }}>
            <div
              className="col-lg-6 col-md-6 col-sm-12 col-xm-12"
              style={{ paddingBottom: "30px" }}
            >
              <form onSubmit={this.submitHandler}>
                <br />

                <input
                  type="text"
                  title="Your Name"
                  className="from-control"
                  placeholder="Your Name"
                  required
                  name="name"
                  value={name}
                  onChange={this.changeHandler}
                  style={{
                    backgroundColor: " #f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "10px",
                    textDecoration: " none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />
                <br />
                <br />
                <input
                  type="email"
                  title="Email Address"
                  className="mail from-control"
                  required
                  placeholder="Email Address"
                  name="email_id"
                  value={email_id}
                  onChange={this.changeHandler}
                  style={{
                    width: "47%",
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />

                <input
                  type="tel"
                  pattern="[0-9]{10}"
                  title="Number"
                  required
                  className="mail from-control"
                  placeholder="Ph. 9876543210"
                  name="contact_no"
                  value={contact_no}
                  onChange={this.changeHandler}
                  style={{
                    width: "50%",
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />

                <br />
                <br />

                <input
                  type="text"
                  placeholder="Message"
                  title="Message"
                  className="message from-control"
                  name="message"
                  value={message}
                  onChange={this.changeHandler}
                  style={{
                    backgroundColor: "#f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "100px",
                  }}
                />
                <br />
                <br />

                <input
                  type="text"
                  placeholder="State"
                  title="state"
                  className="state from-control"
                  name="state"
                  value={state}
                  onChange={this.changeHandler}
                  style={{
                    backgroundColor: " #f4f7f9",
                    borderRadius: "2px",
                    width: "100%",
                    padding: "10px",
                    textDecoration: " none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "40px",
                  }}
                />

                <br />
                <br />
                <button
                  type="submit"
                  title="Submit Post"
                  className="bttn from-control"
                  value="Submit"
                  style={{
                    backgroundColor: " #00979d",
                    color: "white",
                    transition: "0.8s",
                    lineHeight: "50%",
                    width: "100%",
                    padding: "10px",
                    textDecoration: "none",
                    border: "none",
                    outline: "none",
                    display: "inline-block",
                    verticalAlign: "top",
                    position: "relative",
                    height: "35px",
                  }}
                >
                  Submit
                </button>
                <br />
              </form>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12 col-xm-12">
              <div className="responsive">
                <br />

                <iframe
                  src="https://maps.google.com/maps?q=1645%20Barrington%20St%20Halifax%2C%20NS%20B3J%201Z9&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="330px"
                  frameBorder="0"
                  style={{ border: "0" }}
                  allowFullScreen
                ></iframe>
                <br />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/*
 console.log("Contsct form submitted now trying to email");
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "mihirpatel479@gmail.com", // generated ethereal user
        pass: "Miluupatel_1996", // generated ethereal password
      },
    });
    // send mail with defined transport object
    let info = transporter.sendMail({
      from: '"Greenkart" <mihirpatel479@gmail.com>', // sender address
      to: "mihirpatel4798@gmail.com", // list of receivers
      subject: "Conact request to GreenKart", // Subject line
      text:
        "Hi You have made request to our site, You will be given response soon.", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    */
