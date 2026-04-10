import { Component } from "react";
import { IntroHeader } from "../Components/IntroHeader.js";
import {CardCase} from "../Components/CardCase.js"
export class Cases extends Component {
  render() {
    return (
      <div className="color_phantom">
        <IntroHeader
        style = ""
          listHeader="OUR CASES"
          sectionTwoHeader="Construction portfolio"
          sectionTwoText = ""
        />
        <CardCase options = "blackAndYellow"/>
      </div>
    );
  }
}
