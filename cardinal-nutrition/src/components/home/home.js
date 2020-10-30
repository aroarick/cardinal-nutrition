import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import "../../App.scss";

function Home() {
  return (
    <>
      <Row>
        <Col className="home-image">
          <Image
            fluid
            src="https://images.unsplash.com/photo-1577593955244-55c972445c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          ></Image>
        </Col>
        <Col className="home-image">
          <Image
            fluid
            src="https://images.unsplash.com/photo-1593840849027-c1a1fd62b0d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
          ></Image>
        </Col>
        <Col className="home-image">
          <Image
            fluid
            src="https://images.unsplash.com/photo-1575026468847-171396e23ad4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          ></Image>
        </Col>
        <Col className="home-image">
          <Image
            fluid
            src="https://images.unsplash.com/photo-1523554879540-cd4fdd3c0519?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=630&q=80"
          ></Image>
        </Col>
      </Row>
    </>
  );
}

export default Home;
