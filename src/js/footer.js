import React, { Component } from 'react';
import { Container } from 'reactstrap';
import '../css/footer.css';
import FontAwesome from'react-fontawesome';


export default class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <Container>
          <h3>Learn More!</h3>
          <div className="dash"></div>
          <ul>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/hodamohammadi/"><FontAwesome name="github"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/hodamohammadi/"><FontAwesome name="linkedin"/></a></li>
            <li><a target="_blank" rel="noopener noreferrer"href="mailto:mohamh8@mcmaster.ca"><FontAwesome name="envelope-o"/></a></li>
          </ul>
          <p>Hoda Mohammadi 2018</p>
          <p>Made with React, Bootstrap and Font Awesome</p>
        </Container>
      </div>
    );
  }
}