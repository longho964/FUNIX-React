import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  FormFeedback,
  Label,
  Input,
  Col,
  Button,
} from "reactstrap";
class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
      agree: false,
      contactType: "tel.",
      message: "",
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false,
      },
    };

    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleInputChange = this.handleInputChange.bind(this);

    this.handleBlur = this.handleBlur.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    console.log("Cureent State is:" + JSON.stringify(this.state));
    alert("Cureent State is:" + JSON.stringify(this.state));
    event.preventDefault();
  }

  handleBlur = (field) => (evt) => {
    this.setState({
      touched: { ...this.state.touched, [field]: true },
    });
  };

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: "",
      lastname: "",
      telnum: "",
      email: "",
    };
    if (this.state.touched.firstname && firstname.length < 4)
      errors.firstname = "First name should be >3 chareter";
    else if (this.state.touched.firstname && firstname.length > 10)
      errors.firstname = "First name should be <=10";

    if (this.state.touched.lastname && lastname.length < 1)
      errors.lastname = "Last name should be >3 chareter";
    else if (this.state.touched.lastname && lastname.length > 10)
      errors.lastname = "Last name should be <=10";

    const regTel = /^\d+$/; //bieu thuc chinh quy -> kiem tra tinh hop la cua chuoi
    if (this.state.touched.telnum && !regTel.test(telnum))
      errors.telnum = "Tel number only number pls ";

    if (
      this.state.touched.email &&
      email.split("").filter((x) => x === "@").length != 1
    )
      errors.email = "Email should contain a @";

    return errors;
  }

  render() {
    console.log("this is contact page");
    const errors = this.validate(
      this.state.firstname,
      this.state.lastname,
      this.state.telnum,
      this.state.email
    );

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Contact Us</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Contact Us</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">
          <div className="col-12">
            <h3> Location Information</h3>
          </div>
          <div className="col-12 col-sm-4 offset-sm-1">
            <h5> Our address</h5>
            <address>
              121, Clear Water Bay Road <br />
              Clear Water Bay, Kowloon <br />
              HONG KONG <br />
              <i className="fa fa-phone"></i>: +85212345678 <br />
              <i className="fa fa-fax"></i>: +852 8765 4321 <br />
              <i className="fa fa-envelope"></i>:{" "}
              <a href="mailto:confusion@food.net">conFusion@food.net</a>{" "}
            </address>
          </div>
          <div className="col-12 col-sm-6 offset-sm-1">
            <h5> Map of our Location</h5>
          </div>
          <div className="col-12 col-sm-11 offset-sm-1">
            <div className="btn-group" role="group">
              <a
                role="button"
                className="btn btn-primary"
                href="tel:+85212345678"
              >
                <i className="fa fa-phone"></i> Call
              </a>
              <a role="button" className="btn btn-info">
                <i className="fa fa-skype"></i> Skype
              </a>
              <a
                role="button"
                className="btn btn-success"
                href="mailto:confusion@food.net"
              >
                <i className="fa fa-envelope-o"></i> Email
              </a>
            </div>
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12">
            <h3> Sen us Your Feedback</h3>
          </div>
          <div className="col-12 col-md-9">
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Label htmlFor="firstname" md={2}>
                  {" "}
                  First Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder="First name"
                    value={this.state.firstname}
                    onBlur={this.handleBlur("firstname")}
                    valid={errors.firstname === ""}
                    invalid={errors.firstname !== ""}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.firstname}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="lastname" md={2}>
                  {" "}
                  last Name
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder="last name"
                    value={this.state.lastname}
                    onBlur={this.handleBlur("lastname")}
                    valid={errors.lastname === ""}
                    invalid={errors.lastname !== ""}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback>{errors.lastname}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="telnum" md={2}>
                  {" "}
                  Tel Number
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="telnum"
                    name="telnum"
                    placeholder="Tel Number"
                    value={this.state.telnum}
                    onBlur={this.handleBlur("telnum")}
                    valid={errors.telnum === ""}
                    invalid={errors.telnum !== ""}
                    onChange={this.handleInputChange}
                  />{" "}
                  <FormFeedback>{errors.telnum}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="email" md={2}>
                  {" "}
                  Email
                </Label>
                <Col md={10}>
                  <Input
                    type="text"
                    id="email"
                    name="email"
                    placeholder=" Email"
                    value={this.state.email}
                    onBlur={this.handleBlur("email")}
                    valid={errors.email === ""}
                    invalid={errors.email !== ""}
                    onChange={this.handleInputChange}
                  />{" "}
                  <FormFeedback>{errors.email}</FormFeedback>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 6, offset: 2 }}>
                  <FormGroup check>
                    <Label check>
                      <Input
                        type="checkbox"
                        name="agree"
                        checked={this.state.agree}
                        onChange={this.handleInputChange}
                      />
                      {""}
                      <strong> May we contact you?</strong>
                    </Label>
                  </FormGroup>
                </Col>
                <Col md={{ size: 3, offset: 1 }}>
                  <Input
                    type="select"
                    name="contactType"
                    value={this.state.contactType}
                    onChange={this.handleInputChange}
                  >
                    <option>Tel.</option>
                    <option>Email</option>
                  </Input>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Label htmlFor="message" md={2}>
                  {" "}
                  Your Feedback
                </Label>
                <Col md={10}>
                  <Input
                    type="textarea"
                    id="message"
                    name="message"
                    rows="12"
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  />
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md={{ size: 10, offset: 2 }}>
                  <Button type="submit" color="primary">
                    Sen Feedback
                  </Button>
                </Col>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
