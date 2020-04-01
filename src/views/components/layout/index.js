import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { HeaderRight, FooterRight, MenuLeft } from "@components";
import routes from "@states/routes";

class Layout extends Component {
showRoutes = routes => {
  let result = null;
  if (routes.length > 0) {
    result = routes.map((route, index) => {
      return( !route.childs  ? (
        <Route
          path={route.path}
          component={route.main}
          key={index}
          exact={route.exact}
        />
      ) : (
        route.childs.map((routeChildren, index) => {
          return (
            <Route
              path={`${route.path}/${routeChildren.path}`}
              component={routeChildren.main}
              key={index}
              exact={routeChildren.exact}
            />
          )
        })
      )
    )
    })
  }
  return result;
}
  render() {
    return (
      <Router>
        <div className="main-web">
          <MenuLeft />
          <div className="main-right">
            <HeaderRight />
            <div id="main">
              <div className="main-content">
                <Switch>
                  {this.showRoutes(routes)}
                </Switch>
              </div>
            </div>
            <FooterRight />
          </div>
        </div>
      </Router>
    );
  }
}
export default Layout;
