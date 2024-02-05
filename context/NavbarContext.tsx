import { createContext, useContext, ReactNode } from 'react';
import React from 'react';

// Define the context type
interface NavbarContextProps {
  showNavbar: boolean;
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context
const NavbarContext = createContext<NavbarContextProps | undefined>(undefined);

// Create a context provider
interface NavbarContextProviderProps {
  children: ReactNode;
}

export const NavbarContextProvider: React.FC<NavbarContextProviderProps> = ({ children }) => {
  const [showNavbar, setShowNavbar] = React.useState<boolean>(true); // Initial value

  return (
    <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarContext.Provider>
  );
};

// Create a custom hook for using the context
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);

  if (!context) {
    throw new Error('useNavbarContext must be used within a NavbarContextProvider');
  }

  return context;
};
