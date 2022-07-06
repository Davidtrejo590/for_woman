import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./Components/Home";

class App extends Component{

  componentDidMount(){

  }


  render(){

    let routes = (
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>
    );

    return(
      <Layout>
        {routes}
      </Layout>
    );
  }

}

export default App;