import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../css/whatido.css';
import FontAwesome from'react-fontawesome';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

export default class WhoIAm extends Component {

  render() {
    return (
      <div className="whatido">
        <Container>
          <h3>Expertise</h3>
          <div className="dash"></div>
          <Row>
            <Col className="padding dev">
              <div className="centerWrapper">
                <FontAwesome name="magic"/>
                <h4>Design</h4>
              </div>
            </Col>
            <Col>
              <div className="centerWrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={700}>
                  <p>I collaborate with clients to understand the requirements and transform their ideas into a well thought out design. </p>
                  
                </ScrollAnimation>
              </div>
            </Col>
          </Row>    
          <Row className="reorder">
            <Col className="first">
              <div className="centerWrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={700}>
                  <p>Researching what is needed to implement the ideas and improving the related skills is an essential part of my development process.</p>
                </ScrollAnimation>
              </div>
            </Col>
            <Col className="padding second">
              <div className="centerWrapper">

                <FontAwesome name="laptop"/>
                <h4>Research</h4>
              </div>
            </Col>
          </Row>        
          <Row>
            <Col className="padding">
              <div className="centerWrapper">
                <FontAwesome name="code"/>
                <h4>Code</h4>
              </div>
            </Col>
            <Col>
              <div className="centerWrapper">
                <ScrollAnimation animateIn="fadeIn" animateOnce={true} offset={700}>
                  <p className="coming">I use my various skills to implement and test the program. </p>
                  <p>Skills: Java, Javascript, Python, ReactJS, Redux, SQL, Android Studio and many more!</p>
                </ScrollAnimation>
              </div>
            </Col>
          </Row> 
        </Container>
      </div>
    );
  }
}