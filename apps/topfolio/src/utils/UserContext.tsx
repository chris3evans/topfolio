import { User } from '@topfolio/api-interfaces';
import { createContext } from 'react';
import { mockUserState } from '../app/mockUser';
export interface UserContextType {
  // Removed type "object" from both
  userDetails: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
}
export const UserContext = createContext<UserContextType>({
  userDetails: mockUserState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => { },
});
