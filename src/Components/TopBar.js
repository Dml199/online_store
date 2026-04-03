import React, { Component } from "react";


export class TopBar extends Component{

  render() {
    return (<div>
         <div><img src = "logo.svg" class =" fixedPos top100 left30 width70 zIndex13 logoVertAlign"></img></div>
        
            <h1 class =" fixedPos top100 left30 width70 color_yellow fonts left100 zIndex13">Hermes Construction</h1>
      <div id="topbar" class = "inline top100 list  color_phantom width100 ">
 
        <ul class = "inline  removeListDecor align_items remPadMarg borderLeftRight ">
          <li class = " dec_none padding_20   fonts">
            <a href="#home" class = "dec_none  color_yellow fonts font_weight_bold space_medium">Home</a>
          </li>
          <li class = " dec_none padding_20   fonts ">
            <a href="#about" class = "dec_none  color_yellow fonts font_weight_bold space_medium ">About</a>
          </li>
          <li class = " dec_none padding_20   fonts ">
            <a href="#contact" class = "dec_none color_yellow fonts font_weight_bold space_medium ">Contact</a>
          </li>
        </ul>

      </div>
      </div>
    );
  }
}
