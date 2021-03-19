import React from 'react';
const initialState = [];
export const ScannerContext = React.createContext(null);
export function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <ScannerContext.Provider value={{state, setState}}>
      {props.children}
    </ScannerContext.Provider>
  );
}
