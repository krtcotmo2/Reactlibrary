import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation"
import Search from "./components/Pages/Search/Search"
import Saved from "./components/Pages/Saved/Saved"
import "./App.css";

class App extends Component {
    
  render() {
    return (
      <div className="App">
          <Router>
               <div>
                    <Navigation/>
                    <Switch>
                         <Route exact path="/" component={Search}/>
                         <Route exact path="/saved" component={Saved}/>
                    </Switch>
               </div>
          </Router>
      </div>
    );
  }
}

export default App;
