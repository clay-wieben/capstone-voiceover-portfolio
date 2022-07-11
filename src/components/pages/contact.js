import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import StockPhone from "../../assets/images/stock/stock-phone.png";
import "../../style/contact.scss";

export default function Contact() {
  return (
    <div className="contact-page-wrapper">
      <div
        className="background"
        style={{
          background: "url(" + StockPhone + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="contact-container">
        <div className="contact-me">CONTACT ME</div>
        <div className="bullet-points">
          <div className="point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="content">208-569-3307</div>
          </div>

          <div className="point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope" />
            </div>
            <div className="content">Clayton.Wieben@gmail.com</div>
          </div>

          <div className="point-group">
            <div className="icon">
              <FontAwesomeIcon icon="map-marked-alt" />
            </div>
            <div className="content">Rexburg, ID</div>
          </div>
        </div>
      </div>
    </div>
  );
}
