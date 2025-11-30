import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  const saveUser = (userData, tokenData) => {
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem("currentUser", JSON.stringify(userData));
    if (tokenData) localStorage.setItem("authToken", tokenData);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("currentUser");
    localStorage.removeItem("authToken");
  };

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("currentUser");
      const storedToken = localStorage.getItem("authToken");

      if (storedUser && storedUser !== "undefined") {
        setUser(JSON.parse(storedUser));
      }

      if (storedToken && storedToken !== "undefined") {
        setToken(storedToken);
      }
    } catch (err) {
      console.error("Failed to parse stored user:", err);
      localStorage.removeItem("currentUser");
      localStorage.removeItem("authToken");
    }
  }, []);

  const login = async (email, password) => {
    try {
      const res = await fetch(
        "https://project-backend-pi-weld.vercel.app/api/v1/auth/signin",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );
      
      const data = await res.json();

     
      if (!res.status || !data.data) {
        return { success: false, message: data.message || "Login failed" };
      }

      const userData = { id: data.data.id, email: data.data.email };
      const tokenData = data.data.token;

      saveUser(userData, tokenData);

      return { success: true, message: data.message || "Login successful" };
    } catch (err) {
      return { success: false, message: "Server error" };
    }
  };

  const register = async (username, email, password) => {
    try {
      const res = await fetch(
        "https://project-backend-pi-weld.vercel.app/api/v1/auth/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok || !data.data) {
        return {
          success: false,
          message: data.message || "Registration failed",
        };
      }

      const userData = { id: data.data.id, email: data.data.email };
      const tokenData = data.data.token || null;
      saveUser(userData, tokenData);

      return {
        success: true,
        message: data.message || "Registration successful",
      };
    } catch (err) {
      return { success: false, message: "Server error" };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, token, login, logout, register, saveUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
