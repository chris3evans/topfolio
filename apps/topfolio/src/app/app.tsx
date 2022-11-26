import { useState } from 'react';
import { UserContext } from '../utils/UserContext';
import LandingPage from './landing-page/landing-page';
import { User } from '@topfolio/api-interfaces';

export const App = () => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div>
        <LandingPage />
      </div>
    </UserContext.Provider>
  );
};

export default App;
