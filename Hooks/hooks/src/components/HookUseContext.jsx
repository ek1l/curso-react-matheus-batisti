/* eslint-disable react/prop-types */
import { createContext } from 'react';

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = 'Testing Context.';
  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};
