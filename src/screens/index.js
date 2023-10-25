import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Launcher from "../launcher";
import Details from "./Details";
import Booking from "./Booking";
import ProtectedRoute from "./ProtectedRoute";


//This is Index.js from Screen folder.
function Controller()
{
    debugger;
    return (<Router>
              <Switch>
               <Route exact path="/" component={Launcher}/>
               <Route exact path="/details/:id" 
                      component={Details}/>
               <ProtectedRoute  exact path="/book" component={Booking}/>
              </Switch>
            </Router>)
}

export default Controller;