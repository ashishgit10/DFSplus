import React, { createContext, useState } from 'react';

// Create the context
export const RoleContext = createContext();

// Create the provider component
export const RoleProvider = ({ children }) => {
  const [role, setRole] = useState(null); // Role state (null, 'user', or 'inspector')

  return (
    <RoleContext.Provider value={{ role, setRole }}>
      {children}
    </RoleContext.Provider>
  );
};
