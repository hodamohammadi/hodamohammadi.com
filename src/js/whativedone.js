import React, { Component } from 'react';
import { Container, Row, Col, Progress } from 'reactstrap';
import '../css/whativedone.css';
import FontAwesome from'react-fontawesome';

export default class WhatIveDone extends Component {

  render() {
    return (
      <div className="whativedone">
        <Container>
          <h3>Projects</h3>
          <div className="dash"></div>
          <Row>
            <Col xs="8">
              <Row>
                <h5>In & Out | Android Mobile App <a target="_blank" rel="noopener noreferrer" href="https://github.com/hodamohammadi/In-Out"><FontAwesome name="github"/></a> </h5>
                <p>An android application developed in Android Studio using Java that stores employees and visitors daily activities in a database using SQLite and periodically emails the data using SMTP. </p>
                
              </Row>
              
              <Row>
                <h5>Chat Room | React Native App <a target="_blank" rel="noopener noreferrer" href="https://github.com/hodamohammadi/MessageMe"><FontAwesome name="github"/></a></h5>
                <p>An android application implemented using React Native, Redux and Firebase that creates a chatroom allowing multiple users to message each other. </p>
              </Row>
              <Row>
                <h5>Piece Of Mind | Java EE Web App <a target="_blank" rel="noopener noreferrer" href="https://github.com/hodamohammadi/PieceOfMind"><FontAwesome name="github"/></a></h5>
                <p>An application built on Apache Tomcat that provides analytics of the attitudes of Twitter users as individuals and as a collective.</p>
              </Row>
              <Row>
                <h5>In2gr8 | Bootstrap Web App <a target="_blank" rel="noopener noreferrer" href="https://github.com/hodamohammadi/In2gr8"></a><FontAwesome name="github"/></h5>
                <p>A web application that computes symbolic results of mathematical functions using Javascript and Bootstrap. </p>
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
                    <Progress striped animated value={85} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">JS</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={80} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">XML</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={85} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">SQL</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={80} />
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
                    <p className="skill">Redux</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={60} />
                  </Col>
                </Row>
          
                <Row>
                  <Col xs="3">
                    <p className="skill">Latex</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={74} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">NASM</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={40} />
                  </Col>
                </Row>
            
                <Row>
                  <Col xs="3">
                    <p className="skill">Bash</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={48} />
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <p className="skill">Python</p>
                  </Col>
                  <Col xs="9">
                    <Progress striped animated value={70} />
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