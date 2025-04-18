// src/utils/localStorage.js
export const storage = {
  get: (key) => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (error) {
      console.error(`Error getting item ${key} from localStorage:`, error);
      return null;
    }
  },

  set: (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(`Error setting item ${key} in localStorage:`, error);
    }
  },

  remove: (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing item ${key} from localStorage:`, error);
    }
  },

  clear: () => {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  }
};

export const STORAGE_KEYS = {
  USERS: 'anseyo_users',
  AGENTS: 'anseyo_agents',
  APPOINTMENTS: 'anseyo_appointments',
  MESSAGES: 'anseyo_messages',
  SETTINGS: 'anseyo_settings',
  CURRENT_USER: 'anseyo_currentUser'
};