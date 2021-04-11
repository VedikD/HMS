import React, { Component } from "react";
import { Card, Button,Carousel,Navbar,Nav} from "react-bootstrap"
import { Link } from "react-router-dom";


class Single extends Component {
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
              <h3>Premium Single Rooms</h3>
              <p>Each Room having its own Signature</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/s1.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3> Premium Single Rooms</h3>
              <p>Each Room having its own Signature</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/s2.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Premium Single Rooms</h3>
              <p>Each Room having its own Signature</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br/>
        <Card>
          <br />
          <Card.Text>
            <h4> Price: ₹1599-/  </h4>
            <Button variant="outline-primary" onClick={this.addCustomer}> Book now</Button><br/>
            <br />
            <h4> Amenities </h4>
            <li>Complimentary Breakfast</li>
            <li>Lavish Interior</li>
            <li>Balcony</li>
            <li>High Speed Internet</li>
            <li>Modern Wardrobe</li>
            <br />
            </Card.Text>
            </Card><br/>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/s3.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Basic Single Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/s4.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Basic Single Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/s5.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Basic Single Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br/>
        <Card>
          <br />
          <Card.Text>
            <h4> Price: ₹999-/  </h4>
            <Button variant="outline-primary" onClick={this.addCustomer}> Book now</Button><br/>
            <br />
            <h4> Amenities </h4>
            <li>Complimentary Breakfast</li>
            <li>High Speed Internet</li>
            <li>Modern Wardrobe</li>
            <br />
            </Card.Text>
            </Card><br/>

    </div>
  
    </div>
    )  
}
}

export default Single;