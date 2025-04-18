import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useLocalStorage('anseyo_currentUser', null);
  const [users, setUsers] = useLocalStorage('anseyo_users', []);
  const [agents, setAgents] = useLocalStorage('anseyo_agents', []);

  const login = async (email, password) => {
    const user = [...users, ...agents].find(u => u.email === email);
    if (user) {
      setCurrentUser(user);
      return user;
    }
    throw new Error('Invalid credentials');
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = async (data) => {
    if (!currentUser) return;
    
    const updatedUser = { ...currentUser, ...data };
    setCurrentUser(updatedUser);

    if (currentUser.type === 'user') {
      const updatedUsers = users.map(u => 
        u.id === currentUser.id ? updatedUser : u
      );
      setUsers(updatedUsers);
    } else {
      const updatedAgents = agents.map(a => 
        a.id === currentUser.id ? updatedUser : a
      );
      setAgents(updatedAgents);
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      login,
      logout,
      updateProfile,
      users,
      agents
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);