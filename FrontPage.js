import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  Col,
  Row,
  Navbar,
  Nav,
  Container,
  Button,
  Carousel,
} from "react-bootstrap";
import "./CustomStyles.css";
import "./Footer.css";
import {Link, } from "react-router-dom";

class FrontPage extends Component {
  constructor(props){
    super(props)

       

this.addCustomer = this.addCustomer.bind(this);
}

addCustomer(){
 this.props.history.push('/BookingForm');
}

render() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Hotel Villa </Navbar.Brand>
        <Nav className="mr-auto">
          <Link to="/Single">
            <Nav.Link href="#Single">Single Rooms</Nav.Link>
          </Link>
          <Link to="/Double">
            <Nav.Link href="#Double">Double Rooms</Nav.Link>
          </Link>
          <Link to="/Presidential">
            <Nav.Link href="#Presidential">Presidential Suite</Nav.Link>
          </Link>
        </Nav>
      </Navbar>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Single.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Single Bed Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Double.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Double Bed Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/Triple.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Triple Bed Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <div className="text-center">
        <h2> Our Most Booked Rooms </h2>
        <br />
      </div>
      <Container fluid>
        <Row>
          <Col>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src="/images/Single.jpg" />
              <Card.Body>
                <Card.Title>Like this Room </Card.Title>
                <Card.Text>
                  Single Bed Room with AC and Wifi. Breakfast is Complimentary
                  Lucnch/Dinner Available in order.
                </Card.Text>
                <Button variant="outline-primary" onClick={this.addCustomer} > Get this room now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src="/images/Double.jpg" />
              <Card.Body>
                <Card.Title>Like this Room </Card.Title>
                <Card.Text>
                  Double Bed Room with AC and Wifi. Breakfast is Complimentary
                  Lucnch/Dinner Available in order.
                </Card.Text>
                <Button variant="outline-primary" onClick={this.addCustomer} > Get this room now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1> </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1> </h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src="/images/Triple.jpg" />
              <Card.Body>
                <Card.Title>Like this Room </Card.Title>
                <Card.Text>
                  Triple Bed Room with AC and Wifi. Breakfast is Complimentary
                  Lucnch/Dinner Available in order.
                </Card.Text>
                <Button variant="outline-primary" onClick={this.addCustomer}> Get this room now</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src="/images/four.jpg" height="250" />
              <Card.Body>
                <Card.Title>Like this Room </Card.Title>
                <Card.Text>
                  Four Bed Room with AC and Wifi. Breakfast is Complimentary
                  Lucnch/Dinner Available in order.
                </Card.Text>
                <Button variant="outline-primary" onClick={this.addCustomer}> Get this room now</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
        <div className="text-center">
          <h2> Our Facilites </h2>
        </div>
        <Card>
          <br />
          <Card.Text>
            <h4> Key Amenities </h4>
            <li> Check in: 24 Hrs </li>
            <li> Check out: 24 Hrs </li>
            <li>High-Speed Internet Access</li>
            <li>Complimentary Public Area</li>
            <li> Complimentary Breakfast</li>
            <br />
            <h4> Parking </h4>
            <li> Free Parking (For more than 2 Days of Stay)</li>
            <li> Parking Fees 50-/</li>
            <br />
            <h4> Hotel Services And Amenities </h4>
            <li> Close to Airport </li>
            <li> Air conditioning </li>
            <li> All public areas non-smoking </li>
            <li> Cash machine/ATM, nearby</li>
            <li> Foreign exchange, nearby </li>
            <li> In-House Restaurant</li>
            <li> Multi-Cultural Cuisine </li>
            <br />
          </Card.Text>
        </Card>
      </Container>
      <footer >
  <p>Hotel Villa </p>
  <p>@All Rights Resevered By Hotel Villa </p>
</footer>
    </div>
  );
}
}

export default FrontPage;
