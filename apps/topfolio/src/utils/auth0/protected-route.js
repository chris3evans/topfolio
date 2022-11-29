import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Route } from "react-router-dom";
/* import { PageLoader } from "../pages/page-loader"; */

/* export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <>
          <div className='container'>
            Loading...
          </div>
        </>
      ),
    })}
    {...args}
  />
); */
export const ProtectedRoute = ({ component, ...args }) => {
  return <Route {...args} render={(props) => {
    // wrap the component inside the render function,
    // to stop withAuthenticationRequired getting recreated
    // on every render
    const Comp = withAuthenticationRequired(component, {});
    return <Comp {...props} />;
  }} />;
};