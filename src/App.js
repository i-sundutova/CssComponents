import React from "react";
import { Route, Switch } from "react-router-dom";

import "./css/compiled.scss";

import Layout from "./components/Layout";
import Home from "./components/Home";
import Alerts from "./components/Alerts";
import Buttons from "./components/Buttons";
import Grid from "./components/Grid";
import Tables from "./components/Tables";

class App extends React.Component {
   render() {
      return (
         <Layout>
            <Switch>
               <Route exact path="/" render={() => <Home />} />
               <Route exact path="/alerts" render={() => <Alerts />} />
               <Route exact path="/buttons" render={() => <Buttons />} />
               <Route exact path="/grid" render={() => <Grid />} />
               <Route exact path="/tables" render={() => <Tables />} />
            </Switch>
         </Layout>
      );
   }
}

export default App;
