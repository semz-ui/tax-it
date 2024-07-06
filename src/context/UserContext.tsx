import { createContext } from 'react';
import { UserContextState } from '../types/types';



const UserContext = createContext<UserContextState>({
    userType: 'individual', // Initial state
    setUserType: (_type) => { },
});

export default UserContext;
