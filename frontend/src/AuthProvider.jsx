import { createContext, useState } from "react";

const AuthContext = createContext({});
/*
createContext jest funkcją z React, która tworzy kontekst. 
Kontekst w React pozwala na przekazywanie danych głęboko 
w drzewie komponentów bez konieczności przekazywania ich 
jako props przez wszystkie pośrednie komponenty. Domyślna 
wartość dla tego kontekstu to pusty obiekt {}.
*/

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  /*
  useState jest hookiem React do zarządzania stanem komponentu. 
  Tutaj używane jest do przechowywania danych dotyczących autentykacji. 
  auth to stan, który przechowuje dane autentykacji, a setAuth to funkcja, 
  która pozwala na aktualizację tego stanu.
  */

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
