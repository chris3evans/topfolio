import { User } from '@topfolio/api-interfaces';
import { createContext } from 'react';
export interface UserContextType {
<<<<<<< HEAD
  userDetails: User | null | Object;
  setUser: React.Dispatch<React.SetStateAction<User | null | Object>>;
=======
  userDetails: User | null | object;
  setUser: React.Dispatch<React.SetStateAction<User | null | object>>;
>>>>>>> 7c17c31 (feat(css/landing page): made landing page responsive and modified font sizes)
}
export const UserContext = createContext<UserContextType>({
  userDetails: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUser: () => { },
});
