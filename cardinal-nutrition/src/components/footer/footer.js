import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../../App.scss";

function Footer() {
  return (
    <>
      <div fluid className="footer">
        <Row>
          <Col>
            <h3>About</h3>
          </Col>
          <Col></Col>
          <Col>
            <h3>Contact</h3>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
