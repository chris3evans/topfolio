import { useState } from 'react';
import { UserContext } from '../utils/UserContext';
import LandingPage from './landing-page/landing-page';
import DashBoardPage from './dash-board-page/dash-board-page';
import Dashboard from './dashboard/dashboard';
import CallbackPage from './callback/callback';
import { Auth0ProviderWithHistory } from '../utils/auth0/auth0-provider-with-history';
import { ProtectedRoute } from '../utils/auth0/protected-route';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from '@topfolio/api-interfaces';
import { PortfolioPage } from './portfolio-page/portfolio-page';
import { mockUserState } from './mockUser';
import { ErrorPage } from './error-page/error-page';
export const App = () => {
  const [userDetails, setUser] = useState<User>(mockUserState);
  return (
    <div>
      <BrowserRouter>
        <Auth0ProviderWithHistory>
          <Switch>
            <UserContext.Provider value={{ userDetails, setUser }}>
              <Route path="/" exact component={LandingPage} />
              <Route
                exact
                path="/portfolio/"
                render={(props) => <PortfolioPage viewMode={true} {...props} />}
              />
              <Route exact path="/dashboard" component={DashBoardPage} />
              <Route path="/dashboard/:section" component={DashBoardPage} />
              <Route path="/callback" component={CallbackPage} />
              <Route path="/error" component={ErrorPage} />
              <Route
                exact
                path="/:slug-portfolio"
                render={(props) => <PortfolioPage viewMode={true} {...props} />}
              />
            </UserContext.Provider>
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
};
