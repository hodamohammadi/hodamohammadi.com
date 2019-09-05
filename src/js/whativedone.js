import React, { Component } from "react";
import { Container, Row, Col, Progress } from "reactstrap";
import "../css/whativedone.css";
import FontAwesome from "react-fontawesome";

export default class WhatIveDone extends Component {
  render() {
    return (
      <div className="whativedone">
        <Container>
          <h3>Projects</h3>
          <div className="dash" />
          <Row>
            <Col xs="8">
            <Row>
                <h5>
                  Conveyor | Kotlin Mobile App{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hodamohammadi/Conveyor"
                  >
                    <FontAwesome name="github" />
                  </a>{" "}
                </h5>
                <p>Designed and developed a mobile application to connect individuals through an enhanced messaging platform, providing smart replies and secure authentication. 
                  Implemented using Kotlin, ML Kit and Firebase. The application demonstrates a clean Android architecture (MVVM) that is modular, scalable and maintainable.
 {" "}
                </p>
              </Row>

              <Row>
                <h5>
                  Orbit Tracker | Android Mobile App{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hodamohammadi/OrbitEngineeringTracker"
                  >
                    <FontAwesome name="github" />
                  </a>{" "}
                </h5>
                <p> Solely designed and developed an Android application using Java and MVP design pattern used by more than 50 employees to log various work-related activities. 
                  Used SQLite to store employee information and SMTP for related email activities. {" "}
                </p>
              </Row>

              <Row>
                <h5>
                  Piece Of Mind | Java EE Web App{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/hodamohammadi/PieceOfMind"
                  >
                    <FontAwesome name="github" />
                  </a>
                </h5>
                <p>
                  An application built on Apache Tomcat that provides analytics
                  of the attitudes of Twitter users as individuals and as a
                  collective.
                </p>
              </Row>
            </Col>
            <Col xs="4">
              <h5 className="skills">Skills</h5>
              <div className="skillList">
                <Row>
                  <Col xs="3">
                    <p className="skill">Java</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={90} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Kotlin</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={65} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">JS</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={50} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">React</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={50} />
                  </Col>
                </Row>

                <Row>
                  <Col xs="3">
                    <p className="skill">SQL</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={40} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Python </p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={75} />
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
