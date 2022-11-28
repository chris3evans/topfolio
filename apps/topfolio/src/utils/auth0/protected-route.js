import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
import { Route } from "react-router-dom";
/* import { PageLoader } from "../pages/page-loader"; */

export const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => (
        <>
          <div className='container'>
            {/* <PageLoader /> */}
            Loading...
          </div>
        </>
      ),
    })}
    {...args}
  />
);
