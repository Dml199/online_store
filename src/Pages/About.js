import { Component } from "react";
import {IntroHeader} from "../Components/IntroHeader.js";

export class About extends Component {
  render() {
    return (
      <div id="about">
      <IntroHeader listHeader = "HOW WE WORK" sectionTwoHeader = "Our Working Approach" sectionTwoText = " dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis"/>

        <div id="aboutComponent3">
          <div className="aboutComponent3_1">
           <div className = "num"> 01</div>
            <div id="componentCard">
              <img src="consultant.svg"></img>
              <h2>Consultation & Planning</h2>
              <div className = "cardExplanatoryText">            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            venenatis vitae, justo. Nullam</div>
            </div>
          </div>
          <div className="aboutComponent3_1">
           <div className = "num"> 02</div>
            <div id="componentCard">
              <img src="collaboration.svg"></img>
              <h2>Strategy & Concept</h2>
              <div className = "cardExplanatoryText">            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            venenatis vitae, justo. Nullam</div>
            </div>
          </div>
          <div className="aboutComponent3_1">
           <div className = "num"> 03</div>
            <div id="componentCard">
              <img src="Trust.svg"></img>
              <h2>Building trust</h2>
              <div className = "cardExplanatoryText">            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            venenatis vitae, justo. Nullam</div>
            </div>
          </div>
        </div>
        <div id="aboutComponent4"></div>
      </div>
    );
  }
}
