import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "../../App.scss";

function Home() {
  return (
    <>
      <Row>
        <Col md={6}>
          <Image
            fluid
            className="image"
            src="https://images.unsplash.com/photo-1556471013-0001958d2f12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=823&q=80"
          ></Image>
        </Col>
        <Col>
          <Row className="allyns">
            <h1>
              Allyn's <span className="title">Wild Flour Shoppe</span>
            </h1>
            <p>
              Serving Collin County Texas, Allyn's Wild Flour Shoppe is a bakery
              that specializes in using wild yeast. The bakery has a myrid of
              breads to try. From Honey Wheat Bread to Gluten Free Pizza Crust,
              Laurie Smith has you covered.
            </p>
            <Button className="breadbutton" href="/shop">
              VIEW THE BREADS <span className="arrow"> &#8594;</span>
            </Button>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Home;
