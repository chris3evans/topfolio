import { useState } from 'react';
import { UserContext } from '../utils/UserContext';
import LandingPage from './landing-page/landing-page';
import Dashboard from './dashboard/dashboard';
import CallbackPage from './callback/callback';
import { Auth0ProviderWithHistory } from '../utils/auth0/auth0-provider-with-history';
import { ProtectedRoute } from '../utils/auth0/protected-route';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from '@topfolio/api-interfaces';
import PortfolioPage from './portfolio-page/portfolio-page';

export const App = () => {
  const [user, setUser] = useState<User | null>(null);

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
      <Auth0ProviderWithHistory>
        <BrowserRouter>
          <Switch>
            <UserContext.Provider value={{ user, setUser }}>
              <Route path="/" exact component={LandingPage} />
              <Route path="/portfolio/" exact component={PortfolioPage}/>
              <ProtectedRoute path="/dashboard" component={Dashboard} />
              <ProtectedRoute
                path="/dashboard/:section"
                component={Dashboard}
              />
              <Route path="/callback" component={CallbackPage} />
            </UserContext.Provider>
          </Switch>
        </BrowserRouter>
      </Auth0ProviderWithHistory>
    </div>
  );
};
