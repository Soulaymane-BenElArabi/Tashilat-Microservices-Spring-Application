import React, { createContext, useState, useEffect } from "react";


const AuthContext = createContext({});

const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("public");

  useEffect(() => {
    // Pull saved login state from localStorage / AsyncStorage
    if(localStorage.getItem("loggedIn") === 'null'){
      setLoggedIn(false)
      setRole("public")
    }else if(localStorage.getItem("loggedIn") === 'true') {
      setLoggedIn(true)
      var role = localStorage.getItem("role")
      setRole(role)
    }else if(localStorage.getItem("loggedIn")==='false') {
      setLoggedIn(false)
    }
  }, []);
  const changeRole = (myRole)=>{
    setRole(myRole)
    localStorage.setItem("role",myRole)
  }

  const login = () => {
      setLoggedIn(true)
      localStorage.setItem("loggedIn",true)
  };

  const logout = () => {
    
      setLoggedIn(false)
      localStorage.clear()
    
  };

  const authContextValue = {
    login,
    loggedIn,
    logout,
    role, 
    changeRole
  };

  return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);
export { AuthProvider, useAuth };
