import { Auth0Provider } from '@auth0/auth0-react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { environment } from '../../environments/environment';

export const Auth0ProviderWithHistory = ({ children }) => {
  const history = useHistory();
  const domain = environment.REACT_APP_AUTH0_DOMAIN;
  const clientId = environment.REACT_APP_AUTH0_CLIENT_ID;
  const redirectUri = environment.REACT_APP_AUTH0_CALLBACK_URL;
  const audience = environment.REACT_APP_AUTH0_AUDIENCE;

  const onRedirectCallback = (appState) => {
    history.push('/dashboard/about-me');
  };

  if (!(domain && clientId && audience)) {
    return null;
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
      audience={audience}
      cacheLocation="localstorage"
    >
      {children}
    </Auth0Provider>
  );
};
