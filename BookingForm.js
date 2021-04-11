import React, { Component } from 'react'
import Hservice from './Service/Hservice'
import "./CustomStyles.css";
import "./Footer.css";


class BookingForm extends Component {
    constructor(props) {
        super(props)

     
        this.state = {
           
            Name: '',
            Email: '',
            Contact: '',
            Guests: '',
            Room: '',
            Checkin: '',
            Checkout: '',
            
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeGuestsHandler = this.changeGuestsHandler.bind(this);
        this.changeRoomHandler = this.changeRoomHandler.bind(this);
        this.changeCheckinHandler = this.changeCheckinHandler.bind(this);
        this.changeCheckoutHandler = this.changeCheckoutHandler.bind(this);
        this.saveOrUpdateCustomer = this.saveOrUpdateCustomer.bind(this);
    }
    

    saveOrUpdateCustomer = (c) => {
        c.preventDefault();
        let customer = {Name: this.state.Name, Email: this.state.Email, Contact: this.state.Contact,
          Guests: this.state.Guests,Room: this.state.Room,Checkin: this.state.Checkin,Checkout: this.state.Checkout,
        };
        console.log('customer => ' + JSON.stringify(customer));
        Hservice.createCustomer(customer).then(res=>{
          alert("sucess");
        });

        
        
       
        
    }

   

   changeNameHandler= (event) => {
        this.setState({Name: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({Email: event.target.value});
    }

    changeContactHandler= (event) => {
        this.setState({Contact: event.target.value});
    }
    changeGuestsHandler= (event) => {
      this.setState({Guests: event.target.value});
  }
  changeRoomHandler= (event) => {
    this.setState({Room: event.target.value});
}
changeCheckinHandler= (event) => {
  
  this.setState({Checkin: event.target.value});
}
changeCheckoutHandler= (event) => {
  this.setState({Checkout: event.target.value});
}

   

    render() {
        return (
          <div>
            <h1 className="text-center"> Booking Form  </h1>
                <br></br>
                   <div >
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                              
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="Name" className="form-control" 
                                                value={this.state.Name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.Email} onChange={this.changeEmailHandler}
                                                />
                                        </div>
                                        <div className = "form-group">
                                            <label> Contact: </label>
                                            <input placeholder="Contact" name="Contact" className="form-control" 
                                                value={this.state.emailId} onChange={this.changeContactHandler}
                                                minLength="10"/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Guests: </label>
                                            <input placeholder="No. of Guest"  name="Guests" className="form-control" 
                                                value={this.state.Guests} onChange={this.changeGuestsHandler}
                                                maxLength="1"  />
                                                <span >Maximum 4 Guests Allowed</span>
                                        </div>
                                        <div className = "form-group">
                                            <label> Room: </label>
                                            <input placeholder="No. of Room" name="Room" className="form-control" 
                                                value={this.state.Room} onChange={this.changeRoomHandler}
                                                maxLength="1"/>
                                                 <span >Enter 1 room per 2 Guests</span>
                                        </div>
                                        <div className = "form-group">
                                            <label> Checkin </label>
                                            <input type="date" name="Checkin" className="form-control" 
                                                value={this.state.Checkin} onChange={this.changeCheckinHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Checkout </label>
                                            <input type="date" name="Checkout" className="form-control" 
                                                value={this.state.Checkout} onChange={this.changeCheckoutHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price </label><br/>
                                            <input type="radio" name="same" value="del" onChange={this.priceDetils}></input>
                                            <label for="del"> Deluxe Room</label><br/>
                                            <input type="radio" name="same" value="bas" onChange={this.priceDetils}></input>
                                            <label for="bas"> Basic Room</label>
                                            <h3>Price For Deluxe  Room: 1599 </h3>
                                            <h3>Price For Basic  Room: 999 </h3>
                                           
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCustomer}>Submit</button>
                                        
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                   <footer >
  <p>Hotel Villa </p>
  <p>@All Rights Resevered By Hotel Villa </p>
</footer>
            </div>
        )
    }
}

export default BookingForm