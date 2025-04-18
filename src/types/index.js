// src/types/index.js
export const UserTypes = {
  USER: 'user',
  AGENT: 'agent',
  ADMIN: 'admin'
};

export const AppointmentStatus = {
  SCHEDULED: 'scheduled',
  COMPLETED: 'completed',
  CANCELLED: 'cancelled'
};

export const Languages = {
  ENGLISH: 'en',
  SPANISH: 'es',
  HAITIAN_CREOLE: 'ht',
  VIETNAMESE: 'vi',
  MANDARIN: 'zh'
};

// Type definitions for reference (using JSDoc for JavaScript)
/**
 * @typedef {Object} User
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string} preferredLanguage
 * @property {string[]} languages
 * @property {Object} preferences
 * @property {boolean} preferences.notifications
 * @property {('light'|'dark')} preferences.theme
 */

/**
 * @typedef {Object} Agent
 * @property {string} id
 * @property {string} name
 * @property {string} email
 * @property {string[]} languages
 * @property {string[]} credentials
 * @property {Object} availability
 * @property {boolean} isActive
 */

/**
 * @typedef {Object} Appointment
 * @property {string} id
 * @property {string} userId
 * @property {string} agentId
 * @property {string} startTime
 * @property {string} endTime
 * @property {('scheduled'|'completed'|'cancelled')} status
 * @property {string} [notes]
 */

/**
 * @typedef {Object} Message
 * @property {string} id
 * @property {string} senderId
 * @property {string} receiverId
 * @property {string} content
 * @property {string} timestamp
 * @property {boolean} isRead
 */