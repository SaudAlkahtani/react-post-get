import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Get from "./Get";
import Post from "./Post";
import { Button, Row, Col, Card, CardBody, CardHeader } from "reactstrap";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Row className="justify-content-center pt-5 mr-0">
              <Col className="col-5">
                <Card>
                  <CardHeader>
                    <h2>Welcome to Http API test</h2>
                  </CardHeader>
                  <CardBody>
                    <Row style={{ textAlign: "center" }} className="pt-5">
                      <Col>
                        <Button tag={Link} color="info" to="get">
                          Get
                        </Button>
                        <Button
                          className="ml-3 "
                          tag={Link}
                          to="post"
                          color="warning"
                        >
                          Post
                        </Button>
                      </Col>
                    </Row>
                        <div className="pt-3">
                    <Switch >
                      <Route path="/get">
                        <Get />
                      </Route>
                      <Route path="/post">
                        <Post />
                      </Route>
                      <Route path="/">
                        <h3>Please choose method to demo!</h3>
                      </Route>
                    </Switch>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Router>
      </div>
    );
  }
}
