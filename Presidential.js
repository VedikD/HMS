import { render } from '@testing-library/react';
import React, { Component } from 'react';
import { Card, Button,Carousel,Navbar,Nav} from "react-bootstrap"
import { Link } from "react-router-dom";

class Presidential extends Component {
  constructor(props){
    super(props)

       

this.addCustomer = this.addCustomer.bind(this);
}

addCustomer(){
 this.props.history.push('/BookingForm');
}

render() {
    return(
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
              src="/images/p1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
            <h3> Presidential Suite </h3>
              <p>Enjoy Your Own Private Space with Lush Interiors and Beautiful Views</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/p2.jpg"
              alt="Second slide"
            />

            <Carousel.Caption>
            <h3> Presidential Suite </h3>
              <p>Enjoy Your Own Private Space with Lush Interiors and Beautiful Views</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/p3.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> Presidential Suite </h3>
              <p>Enjoy Your Own Private Space with Lush Interiors and Beautiful Views</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/p4.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3> Presidential Suite </h3>
              <p>Enjoy Your Own Private Space with Lush Interiors and Beautiful Views</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel><br/>
        <Card>
          <br />
          <Card.Text>
            <h4> Price: ₹3999-/  </h4>
            <Button variant="outline-primary" onClick={this.addCustomer}> Book now</Button><br/>
            <br />
            <h4> Amenities </h4>
            <li>Lavish Interior</li>
            <li>Private Elevator</li>
            <li> Jacuzi </li>
            <li> Beautiful Views</li>
            <li> Private Space </li>
            <li> 3 Balconies</li>
            <li>Complimentary Breakfast</li>
            <li>High Speed Internet</li>
            <li>Modern Wardrobe</li>
            <br />
            </Card.Text>
            </Card><br/>
    </div>
    <footer >
  <p>Hotel Villa </p>
  <p>@All Rights Resevered By Hotel Villa </p>
</footer>
    </div>
    )
    
}
}

export default Presidential;