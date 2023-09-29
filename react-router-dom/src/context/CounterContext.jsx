// 1 - ContextAPI
import { createContext, useState } from 'react';

export const CounterContext = createContext();

// eslint-disable-next-line react/prop-types
export const CounterContextprovider = ({ children }) => {
  const [counter, setCounter] = useState(6);
  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
