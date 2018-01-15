import React, { Component } from 'react';
import "../css/app.css";
import ParticlesBG from "./particlesbg.js";
import FrontScreen from "./frontscreen.js";
import WhoIAm from "./whoiam.js";
import WhatIDo from "./whatido.js";
import WhatIveDone from "./whativedone.js";
import Contact from "./contact.js";
import Footer from "./footer.js";


export default class App extends Component {

    render() {
	    return (
	      <div>
	      	<ParticlesBG/>
	        <FrontScreen/>
	        <WhoIAm/>
	        <WhatIDo/>
	        <WhatIveDone/>
	        <Contact/>
	        <Footer/>
	      </div>
	    );
  	}
}