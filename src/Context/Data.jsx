import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    if (user) localStorage.setItem("currentUser", JSON.stringify(user));
    else localStorage.removeItem("currentUser");
  }, [user]);

  const register = (name, email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find((u) => u.email === email)) {
      return { success: false, message: "User already exists" };
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    setUser(newUser);
    return { success: true, message: "Registration successful" };
  };

  const login = (email, password) => {
    if (email === "admin@admin" && password === "1234") {
      const admin = { email, role: "admin" };
      setUser(admin);
      return { success: true, message: "Welcome Admin" };
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      return { success: true, message: "Login successful" };
    }
    return { success: false, message: "Invalid email or password" };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
