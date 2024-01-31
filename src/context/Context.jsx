import { createContext, useContext, useState } from "react";
import React from "react";

export const context = createContext();

export function ContextProvider({ children })
 {
  const [allMovies, setAllMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
  
      <context.Provider
        value={{
          allMovies,
          setAllMovies,
          loading,
          setLoading,
          error,
          setError
        }}
      >
        { children }
      </context.Provider>
   
  );
}


