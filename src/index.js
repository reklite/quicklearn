/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Index from "views/Index.js";

import Magazines from "views/pages/Magazines.js";
import Ateliers from "views/pages/Ateliers.js";
import Outils from "views/pages/Outils.js";

ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path="/" 
        exact 
        render={(props) => <Index {...props} />} 
      />
      <Route
        path="/magazines"
        exact
        render={(props) => <Magazines {...props} />}
      />
      <Route
        path="/ateliers"
        exact
        render={(props) => <Ateliers {...props} />}
      />
      <Route
        path="/outils"
        exact
        render={(props) => <Outils {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);