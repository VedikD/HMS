import React, { Component } from "react";
import { Card, Button,Carousel,Navbar,Nav} from "react-bootstrap"
import { Link } from "react-router-dom";

   
class Double extends Component {
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
         <Link to="/Single">
            <Nav.Link href="#Single">Single Rooms</Nav.Link>
          </Link>
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
              src="/images/d1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Premium Double Rooms</h3>
              <p>Each Room having its own Signature</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/d2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3> Premium Double Rooms</h3>
              <p>Each Room having its own Signature</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/d3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Premium Double Rooms</h3>
              <p>Each Room having its own Signature</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br/>
        <Card>
          <br />
          <Card.Text>
            <h4> Price: ₹2199-/  </h4>
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
              src="/images/d4.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Basic Double Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/d5.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Basic Double Rooms</h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel><br/>
        <Card>
          <br />
          <Card.Text>
            <h4> Price: ₹1499-/  </h4>
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

export default Double;