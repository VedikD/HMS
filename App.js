import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FrontPage from './HMS/FrontPage';
import Single from './HMS/Rooms/Single'
import Double from './HMS/Rooms/Double'
import Presidential from './HMS/Rooms/Presidential'
import Registration from "./HMS/Registration";
import BookingForm from "./HMS/BookingForm";

function App() {

  
  return (

    <div className="App">
   <Router>
       <Switch>
          <Route path="/" exact component={FrontPage}/>
          <Route path="/Single" component={Single}/>
          <Route path="/Double" component={Double}/>  
          <Route path="/Presidential" component={Presidential}/>
          <Route path="/BookingForm"  component={BookingForm}/>    
       </Switch>
   </Router>
  </div>
  
  );
}

export default App;
