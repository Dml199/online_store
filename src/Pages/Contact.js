import { Component } from "react";

export class Contacts extends Component {
  render() {
    return (
      <div id="contacts">
        <div id="firstSectionContacts">
          <div id="section1_1Contacts">
            <div className="margin20 font40px">LOCATION</div>
            <div className="whiteText18px margin20">
              221b Baker St, London NW1 6XE, UK <br></br>
              POST CODE: 123123
            </div>
          </div>
          <div id="section1_2Contacts">
            <div className=" font40px ">FOLLOW US</div>
            <div id= "contactLogos" className = "marginLeft0">
              <img id= "firstLogo" className = 'ContactsSVG marginRight40px' src="mail.svg"></img>
              <img id= "secondLogo" className = 'ContactsSVG marginRight40px ' src="whatsapp.svg"></img>
                <img id= "thirdLogo"className = 'ContactsSVG marginRight40px '  src="twitter.svg"></img>
            </div>
            <div> © ALL rights reserved.</div>
          </div>
        </div>
        <div id="secondSectionContacts" >
        <div id = "secondSectionContactsText" className="font40px margin20 marginLeft0"> CONTACT FORM</div>

        <div> <input placeholder="Enter your name"></input></div>
        <div>  <input placeholder="Enter your Email"></input></div>
        <div>  <textarea id = "mailContent"placeholder="State your bussiness"></textarea></div>
        <div>  <button>Send Request</button></div>
        </div>
      </div>
    );
  }
}
