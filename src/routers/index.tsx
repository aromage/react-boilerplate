import React, { ReactNode } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "components/Footer/Footer";
import Page404 from "containers/Page404/Page404";
import HeaderContainer from "containers/HeaderContainer/HeaderContainer";

import { useAuth } from "hooks/useAuth";

import Home from "pages/home/Home";
import Order from "pages/order/Order";

export const pages: Page[] = [
  { path: "/", exact: true, component: Home },

  { path: "/#", exact: true, component: Home },

  { path: "/order", component: Order },
];

const WithProtectedRoute = ({ component: Component, ...rest }: any) => {
  const auth = useAuth();
  const history = useHistory();
  const location = useLocation();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth.isAuthenticated()) {
          //로그인 상태 판단
          return (
            <>
              <HeaderContainer />
              <div className="custom-h-screen">
                <Component {...props} />
              </div>
              <Footer />
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

const Routes = () => {
  return (
    <BrowserRouter basename={"/"}>
      {/* <MediaRunningContainer /> */}

      <ScrollToTop />

      <Switch>
        {/* <Route exact path={"/error"} component={Error} /> */}

        {pages.map(({ component, path, exact }) => {
          return (
            <WithProtectedRoute
              key={path}
              component={component}
              exact={!!exact}
              path={path}
            />
          );
        })}

        <Route component={Page404} />
      </Switch>

      {/* MEDIA */}
    </BrowserRouter>
  );
};

export default Routes;
