import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Row,
  Col,
  Alert,
} from "reactstrap";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      gender: "",
      status: "",
      errorFields: [],
      success: false,
      id: "",
    };
    this.updateForm = this.updateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {}
  updateForm(value) {
    this.setState({
      [value.target.name]: value.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    console.log(this.state);
    axios
      .post(
        "https://gorest.co.in/public-api/users?_format=json&access-token=H96hUwyyZDu3YJSti0qfYsFf3VNcY0wb-yMI",
        this.state,
        {
          headers: {
            Authorization: "Bearer H96hUwyyZDu3YJSti0qfYsFf3VNcY0wb-yMI",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.data.result.id) {
          this.setState({
            errorFields: [],
          });
          console.log(
            "User created successfully!, click here to verify: https://gorest.co.in/public-api/users/" +
              res.data.result.id +
              "?_format=json&access-token=H96hUwyyZDu3YJSti0qfYsFf3VNcY0wb-yMI"
          );
          this.setState({
            success: true,
            id: res.data.result.id,
          });
        } else {
          console.log(res.data.result);
          this.setState({
            errorFields: res.data.result,
          });
        }
      });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h3>This api will post create a username for you.</h3>
          </Col>
        </Row>
        <Row>
          <Col>Please Enter the following information:</Col>
        </Row>
        <Row>
          <Col>
            {this.state.errorFields &&
              this.state.errorFields.length !== 0 &&
              this.state.errorFields.map((field) => {
                return (
                  <Alert key={field.field} color="warning">
                    {field.message}
                  </Alert>
                );
              })}
            {this.state.success && (
              <Alert color="success">
                User created successfully!, click  <a target="_blank" href={"https://gorest.co.in/public-api/users/"+this.state.id+"?_format=json&access-token=H96hUwyyZDu3YJSti0qfYsFf3VNcY0wb-yMI"}>Here</a> to verify!
               
              </Alert>
            )}
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  name="email"
                  id="Email"
                  placeholder="example@example.com"
                  value={this.state.email}
                  onChange={this.updateForm}
                />
              </FormGroup>
              <FormGroup>
                <Label for="first_name">First name</Label>
                <Input
                  type="text"
                  name="first_name"
                  id="first_name"
                  placeholder="Saud"
                  value={this.state.first_name}
                  onChange={this.updateForm}
                />
              </FormGroup>
              <FormGroup>
                <Label for="last_name">Last name</Label>
                <Input
                  type="text"
                  name="last_name"
                  id="last_name"
                  placeholder="Kahtani"
                  value={this.state.last_name}
                  onChange={this.updateForm}
                />
              </FormGroup>

              <FormGroup>
                <Label for="selectGender">Select gender</Label>
                <Input
                  type="select"
                  name="gender"
                  id="selectGender"
                  value={this.state.gender}
                  onChange={this.updateForm}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="selectStatus">Select user status</Label>
                <Input
                  type="select"
                  name="status"
                  id="selectStatus"
                  value={this.state.status}
                  onChange={this.updateForm}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </Input>
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}
