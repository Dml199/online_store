import { Component } from "react";

export class IntroHeader extends Component {
  constructor(props) {
    super(props);
    this.listHeader = props.listHeader;
    this.sectionTwoHeader = props.sectionTwoHeader;
    this.sectionTwoText = props.sectionTwoText;
  }

  render() {
    return (
      <div>
        {" "}
        <div id="aboutComponent_1_container">
          <div id="aboutComponent1_1" class="">
            {this.listHeader}
          </div>
          <div id="aboutComponent1_2" class=""></div>
        </div>
        <div id="aboutComponent2">
          <div id="aboutComponent2_1">{this.sectionTwoHeader}</div>
          <div id="aboutComponent2_2">{this.sectionTwoText}</div>
        </div>
      </div>
    );
  }
}
