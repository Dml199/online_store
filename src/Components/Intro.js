import { Component } from "react";

export class Intro extends Component {
  render() {
    return (
      <div id="introContainer">
        <div id="introLeft" class="color_phantom  border_radius_5">
          <div
            id="topLeft"
            class="color_yellow font_bold font_size_20 margin_10"
          >
            Buidling & Construction
          </div>
          <div id="introHeaderLeft" class="margin_10">
            We Are Professional Building Construcion
          </div>
          <div id="introTextLeft" class="margin_10">
            dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula
            eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis
            parturient montes, nascetur ridiculus mus. Donec quam felis,
            venenatis vitae, justo. Nullam
          </div>
          <div id="introButtonsLeft">
            <button class="relSize_25X40 buttonStylePhantom margin_10 color_white">
              Ask Question
            </button>
            <button class="relSize_25X40 buttonStyleYellow margin_10">
              Our Works
            </button>
          </div>
        </div>
        <div id="introRight">
<div id="firstElem" class = "introRightElem"><div class = "bigYellowNumbers">120+</div><div class = "smallerText">Houses built</div> </div>
<div id="secondElem" class =  "introRightElem"><div class = "bigYellowNumbers">30</div><div class = "smallerText">New Projects</div> </div>
<div id="thirdElem" class = "introRightElem"><div class = "bigYellowNumbers">15</div><div class = "smallerText">Hotels built</div> </div>
<div id="forthElem" class = "introRightElem"><div class = "bigYellowNumbers">11</div><div class = "smallerText">Modern Villas</div> </div>
        </div>
      </div>
    );
  }
}
