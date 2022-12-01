import { User } from '@topfolio/api-interfaces';
import { createContext } from 'react';
export interface UserContextType {
<<<<<<< HEAD
  userDetails: User | null | object;
  setUser: React.Dispatch<React.SetStateAction<User | null | object>>;
=======
  // Removed type "object" from both
  userDetails: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
>>>>>>> development
}
export const UserContext = createContext<UserContextType>({
  userDetails: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => {},
});
