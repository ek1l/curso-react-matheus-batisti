import { createContext, useReducer } from 'react';

export const TitleColorContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const titleColorReducer = (state, action) => {
  switch (action.type) {
    case 'RED':
      return { ...state, color: 'red' };
    case 'BLUE':
      return { ...state, color: 'blue' };
    default:
      return state;
  }
};
// eslint-disable-next-line react/prop-types
export const TitleColorContextProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useReducer(titleColorReducer, { color: 'purple' });
  console.log('Title color context: ', state);
  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
