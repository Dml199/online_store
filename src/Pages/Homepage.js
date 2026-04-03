import { TopBar } from "../Components/TopBar.js";
import React, { Component } from "react";
import {Intro} from "../Components/Intro.js"
import {ImageContainer} from  "../Components/ImageContainer.js"

export class Homepage extends Component {
  render() {
    return (
      <div id="home" >
        <TopBar />
        <ImageContainer/>

         <Intro/>
      </div>

    );
  }
}
