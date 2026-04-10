import { TopBar } from "../Components/TopBar.js";
import React, { Component } from "react";
import { Intro } from "../Components/Intro.js";
import { ImageContainer } from "../Components/ImageContainer.js";
import { About } from "./About.js";
import {Cases} from "./Cases.js";
import {Contacts} from "./Contact.js"


export class Homepage extends Component {
  render() {
    return (
      <div id="home">
        <TopBar />
        <ImageContainer />

        <Intro />
        <About />
        <Cases />
        <Contacts/>
       
      </div>
    );
  }
}
