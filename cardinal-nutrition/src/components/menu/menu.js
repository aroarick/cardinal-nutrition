import React from "react";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import smoothie from "../../smoothies.json";

function testCountForZero(x) {
  return x.count > 0;
}

function count(array, key) {
  console.log(array);
  return array.reduce(function (r, a) {
    if (a.hasOwnProperty(key)) {
      console.log(key);
      return r + a[key];
    } else {
      console.log(key);
      return r;
    }
  }, 0);
}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orderedBread: [],
      orderedBreadHTMLArray: [],
      breadHTMLArray: [],
      makeImageSmaller: false,
    };
  }
  componentDidMount() {
    let oBread = smoothie.smoothie.map((item, index) => {
      return { title: item.title, count: 0, price: item.price };
    });
    this.setState({ orderedBread: oBread });

    let breadCard = smoothie.smoothie.map((item, index) => {
      return (
        <Row className="bread-type" key={index}>
          <Col>
            <Image fluid src={item.image}></Image>
          </Col>
          <Col>
            <h5 className="bread-title">{item.title}</h5>
            <p className="description">{item.description}</p>
          </Col>
          <Col className="text-right">
            <div className="btn-group" role="group" aria-label="First group">
              <button type="button" className="btn btn-fancy">
                ${item.price}
              </button>
              <button
                type="button"
                className="btn btn-fancy smallish actionable"
                onClick={async () => {
                  this.breadAction(item.title, "add");
                  this.update();
                }}
              >
                Request
              </button>
            </div>
          </Col>
        </Row>
      );
    });

    this.setState({ breadHTMLArray: breadCard });
  }

  update() {
    let orderArray = this.state.orderedBread.map((item, index) => {
      return (
        <Container
          className={
            item.count === 0 ? "order-container hidden" : "order-container"
          }
          key={index}
        >
          <p className="order">
            ${item.extendedPrice} - {item.title}
            <Button
              className="bread-action-button first"
              onClick={async () => {
                this.breadAction(item.title, "add");
              }}
            ></Button>
            {item.count}
            <Button
              className="bread-action-button"
              onClick={async () => {
                this.breadAction(item.title, "subtract");
              }}
            ></Button>
            <Button
              className="bread-action-button"
              onClick={async () => {
                this.breadAction(item.title, "remove");
              }}
            ></Button>
          </p>
        </Container>
      );
    });

    this.setState({
      makeImageSmaller: this.state.orderedBread.some(testCountForZero),
    });

    this.setState({ orderedBreadHTMLArray: orderArray });
  }
  breadAction = (title, action) => {
    let obState = this.state.orderedBread;

    for (var i = 0; i < obState.length; i++) {
      if (title === obState[i].title) {
        switch (action) {
          case "add":
            obState[i].count++;
            break;
          case "subtract":
            obState[i].count--;
            break;
          case "remove":
            obState[i].count = 0;
            break;
          default:
            break;
        }

        obState[i].extendedPrice = obState[i].count * obState[i].price;

        if (obState[i].count < 0) {
          obState[i].count = 0;
        }
        this.setState({ orderedBread: obState });
      }
    }
    this.update();
  };
  getTotal() {
    let total = count(this.state.orderedBread, "extendedPrice");
    return <div>${total}</div>;
  }
  render() {
    return (
      <Row>
        <Col sm={12} md={4} lg={6}>
          <div
            className={
              this.state.makeImageSmaller
                ? "bread-image smaller"
                : "bread-image"
            }
          >
            <Image
              className={this.state.showBread}
              fluid
              src="https://images.unsplash.com/photo-1545339975-a9cbe0af3392?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
            ></Image>
          </div>
          <div
            className={
              this.state.orderedBread.some(testCountForZero) ? "" : "hidden"
            }
          >
            <Image
              className="line-seperator top"
              fluid
              src="images/lineSeperator.png"
            />
            <h5 className="order title">Your Order</h5>
            {this.state.orderedBread.some(testCountForZero)
              ? this.state.orderedBreadHTMLArray
              : ""}
            <div style={{ textAlign: "center" }}>
              <Button className="breadbutton" onClick={this.submit}>
                Request Your Order {this.getTotal()}
              </Button>
            </div>
            <Image
              className="line-seperator bottom"
              fluid
              src="images/lineSeperator.png"
            />
          </div>
        </Col>
        <Col id="col2" sm={12} md={8} lg={6}>
          <h1 className="shop-title">
            smoothie <span className="title">Offered</span>
          </h1>
          <p>
            Please allow 3 days for your order. Orders are not final until you
            have receive a reply from me. This is also a cash-only business, so
            you will make your payment when you pick up the bread.
          </p>
          {this.state.breadHTMLArray}
        </Col>
      </Row>
    );
  }
}

export default Menu;
