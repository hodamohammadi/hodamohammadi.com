import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/whoiam.css';
import profile from '../img/hoda-linkedin.png';
import orbit from '../img/orbit.png';
import td from '../img/td.png';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class WhoIAm extends Component {

  render() {
    return (
      <div className="whoiam">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={500}>
            <Container className="container">
              <img className="profileImage" src={profile} alt={"profilePic"}/>
              <h3>HELLO!</h3>
              <div className="dash"></div>
                <p>My name is Hoda.</p>
                <p>I'm a Software Engineering student at McMaster University currently finishing my third year of studies.</p>
                <p>I have a passion for mobile application development and I spend my free time learning new skills, making projects and participating in hackathons.</p>
                <p>My work ethic and love for programming has enabled me to create many projects I can say I am proud of. </p>
                
              <div className="dash"></div>
              <p className="small">I've worked at:</p>
              <Row className="work">
                <Col>
                  <img className="td" src={td} alt={"TD Bank"}/>
                </Col>
                <Col>
                  <img className="orbit" src={orbit} alt={"Orbit Engineering"}/>
                </Col>
              </Row>
            </Container>
        </ScrollAnimation>
      </div>
    );
  }
}
