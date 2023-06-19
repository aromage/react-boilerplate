import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";

import About from "pages/about/About";
import Home from "pages/home/Home";
import Page404 from "pages/error/Page404";

export const pages: Page[] = [
  { path: "/", exact: true, component: Home },

  { path: "/#", exact: true, component: Home },

  { path: "/about", component: About },
];

const WithProtectedRoute = ({ component: Component, ...rest }: any) => {
  const auth = true;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (auth) {
          //로그인 상태 판단
          return (
            <>
              {/* <HeaderContainer /> */}
              <div className="custom-h-screen">
                <Component {...props} />
              </div>
              {/* <Footer /> */}
            </>
          );
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
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
