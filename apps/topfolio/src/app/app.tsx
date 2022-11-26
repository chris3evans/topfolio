import LandingPage from './landing-page/landing-page';
import Dashboard from './dashboard/dashboard';
import CallbackPage from './callback/callback';
import { Auth0ProviderWithHistory } from "./utils/auth0/auth0-provider-with-history";
import { ProtectedRoute } from "./utils/auth0/protected-route";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export const App = () => {

  /* const { isLoading } = useAuth0(); */

  /*   if (isLoading) {
      return (
        <>
          <div>
            Diplaying here a loading component...
          </div>
        </>
      );
    } */

  return (
    <div>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <ProtectedRoute path="/dashboard/:section" component={Dashboard} />
            <Route path="/callback" component={CallbackPage} />
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
};

export default App;
