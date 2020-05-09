import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import axios from "axios";

export default class Get extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
  }
  componentDidMount() {
    this.getFox();
  }

  getFox() {
    axios
      .get("https://cors-anywhere.herokuapp.com/https://randomfox.ca/floof/")
      .then((data) => {
        this.setState({
          url: data.data.image,
        });
      });
  }
  render() {
    return (
      <div>
        <Row>
          <Col>
            <h4>
              This is a simple API which gets a random picture related to Foxes
            </h4>
            <h5>The picture will show below:</h5>
          </Col>
        </Row>
        <Row>
          <Col className="pt-3">
            <img
              src={
                this.state
                  ? this.state.url
                    ? this.state.url
                    : "https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-24.png"
                  : "https://www.teknozeka.com/wp-content/uploads/2020/03/wp-header-logo-24.png"
              }
              style={{ border: "1px solid black" }}
              alt="Fox"
              width="100%"
              height="100%"
            ></img>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col>
            <Button onClick={()=>this.getFox()} color="primary">Get A New Image</Button>
          </Col>
        </Row>
      </div>
    );
  }
}
