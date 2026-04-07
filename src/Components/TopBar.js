import React, { Component } from "react";


export class TopBar extends Component {
  constructor(){
    super()
  this.state = {isTopBarVisible:true}

  }






  
  render() {
    return (
      <div>
        
        <div id="topbar" class="inline top100 color_phantom width100 ">
          <div class = "logoContainer " onClick={()=>{this.setState({isTopBarVisible:!this.state.isTopBarVisible})}}>
          <img
            src="logo.svg"
            class="width70 zIndex13 logoVertAlign "
          ></img>
          <h1 class="logoFont  color_yellow fonts zIndex13">
            Hermes Construction
          </h1>
          </div>
          <ul id = "topBarList"  className={this.state.isTopBarVisible?" inline removeListDecor remPadMarg borderLeftRight ": "hidden inline removeListDecor remPadMarg borderLeftRight"}>
            <li class=" dec_none padding_20 fonts topBar">
              <a
                href="#home"
                class="dec_none  color_yellow font_weight_bold space_medium"
              >
                Home
              </a>
            </li>
            <li class=" dec_none padding_20  fonts ">
              <a
                href="#about"
                class="dec_none  color_yellow  font_weight_bold space_medium "
              >
                About
              </a>
            </li>
            <li class=" dec_none padding_20  fonts ">
              <a
                href="#contact"
                class="dec_none color_yellow font_weight_bold space_medium "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
