import { User } from '@topfolio/api-interfaces';
import { createContext } from 'react';
export interface UserContextType {
  userDetails: User | null | Object;
  setUser: React.Dispatch<React.SetStateAction<User | null | Object>>;
}
export const UserContext = createContext<UserContextType>({
  userDetails: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => { },
});
