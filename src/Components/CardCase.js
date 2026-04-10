import { Component } from "react";

export class CardCase extends Component {
  constructor(props) {
    super(props);
    this.placeholderText =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
    this.styles = [
      { liStyle: "style", ulStyle: "style", wrappedStyle: "style" },
      { "background-color": "grey" },
      { "background-color": "grey" },
    ];
    this.currentConfiguration = (() => {
      switch (props.options) {
        case "blackAndYellow":
          return this.styles[0];
      }
    })();
  }

  render() {
    return (
      <div id="cases">
        <ul className="removeListDecor inline flexWrapper color_phantom">
          <li className="caseCardItem boxShadow color_phantom itemCardList">
            <img src="house.jpeg"></img>
            <div className="flexColumn">
              <div className="explainText">TOWNHOUSE</div>
              <h4>{this.placeholderText}</h4>
              <div className=""></div>
              <div className="checkThisCase inline  flexAlignRight">
                Details <img src="learnMore.svg"></img>
              </div>
            </div>
          </li>
          <li className="caseCardItem boxShadow color_phantom itemCardList">
            <img src="hotel.jpeg"></img>
            <div className="flexColumn">
              <div className="explainText">HOTEL</div>
              <h4>{this.placeholderText}</h4>
              <div className=""></div>
              <div className="checkThisCase inline flexAlignRight">
                Details <img src="learnMore.svg"></img>
              </div>
            </div>
          </li>
          <li className="caseCardItem boxShadow color_phantom itemCardList">
            <img src="villa.jpeg"></img>
            <div className="flexColumn">
              <div className="explainText">VILLA</div>
              <h4>{this.placeholderText}</h4>
              <div className=""></div>
              <div className="checkThisCase inline  flexAlignRight">
                Details <img src="learnMore.svg"></img>
              </div>
            </div>
          </li>
          <li className="caseCardItem boxShadow color_phantom itemCardList">
            <img src="hotel_2.jpeg"></img>
            <div className="flexColumn">
              <div className="explainText">HOTEL</div>
              <h4>{this.placeholderText}</h4>
              <div className=""></div>
              <div className="checkThisCase inline  flexAlignRight">
                Details <img src="learnMore.svg"></img>
              </div>
            </div>
          </li>
          <li className="caseCardItem boxShadow color_phantom itemCardList">
            <img src="house_2.jpeg"></img>
            <div className="flexColumn">
              <div className="explainText">HOUSES</div>
              <h4>{this.placeholderText}</h4>
              <div className=""></div>
              <div className="checkThisCase inline  flexAlignRight">
                Details <img src="learnMore.svg"></img>
              </div>
            </div>
          </li>
          <li className="caseCardItem boxShadow color_phantom itemCardList">
            <img src="townhouse_2.jpeg"></img>
            <div className="flexColumn">
              <div className="explainText">SOLUTIONS</div>
              <h4>{this.placeholderText}</h4>
              <div className=""></div>
              <div className="checkThisCase inline flexAlignRight">
                Details <img src="learnMore.svg"></img>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}
