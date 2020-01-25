import React, { useContext } from 'react';

const AppContext = React.createContext(null);

export const AppProvider = ({
  client,
  children
}) => {
  return (
    <AppContext.Provider value={client}>{children}</AppContext.Provider>
  );
};

export const useAppClient = () => useContext(AppContext);