import { useState } from 'react';
import { UserContext } from '../utils/UserContext';
import LandingPage from './landing-page/landing-page';
import DashBoardPage from './dash-board-page/dash-board-page';
import Dashboard from './dashboard/dashboard';
import CallbackPage from './callback/callback';
import FormWorkExperience from './form-work-experience/form-work-experience';
import { Auth0ProviderWithHistory } from '../utils/auth0/auth0-provider-with-history';
import { ProtectedRoute } from '../utils/auth0/protected-route';
import { BrowserRouter } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { User } from '@topfolio/api-interfaces';


export const App = () => {
  const [userDetails, setUser] = useState<User | null | object>(null);

  /*   const { isLoading } = useAuth0();

    if (isLoading) {
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
            <UserContext.Provider value={{ userDetails, setUser }}>
              <Route path="/" exact component={LandingPage} />
              <Route path="/dashboard" exact component={DashBoardPage} />
              <Route
                path="/work-experience"
                component={FormWorkExperience}
              ></Route>
              <Route path="/dashboard/:section" component={DashBoardPage} />
              <Route path="/callback" component={CallbackPage} />
            </UserContext.Provider>
          </Switch>
        </Auth0ProviderWithHistory>
      </BrowserRouter>
    </div>
  );
};
