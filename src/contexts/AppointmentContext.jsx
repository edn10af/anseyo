import React, { createContext, useContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const AppointmentContext = createContext(null);

export function AppointmentProvider({ children }) {
  const [appointments, setAppointments] = useLocalStorage('anseyo_appointments', []);

  const createAppointment = async (data) => {
    const newAppointment = {
      id: Date.now().toString(),
      ...data,
      status: 'scheduled',
      createdAt: new Date().toISOString()
    };
    setAppointments([...appointments, newAppointment]);
    return newAppointment;
  };

  const updateAppointment = async (id, data) => {
    const updatedAppointments = appointments.map(apt =>
      apt.id === id ? { ...apt, ...data } : apt
    );
    setAppointments(updatedAppointments);
  };

  const cancelAppointment = async (id) => {
    const updatedAppointments = appointments.map(apt =>
      apt.id === id ? { ...apt, status: 'cancelled' } : apt
    );
    setAppointments(updatedAppointments);
  };

  return (
    <AppointmentContext.Provider value={{
      appointments,
      createAppointment,
      updateAppointment,
      cancelAppointment
    }}>
      {children}
    </AppointmentContext.Provider>
  );
}

export const useAppointments = () => useContext(AppointmentContext);