import React from 'react';
import { useAppointments } from '../../hooks/useAppointments';

export default function AppointmentCalendar() {
  const { appointments } = useAppointments();

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">My Appointments</h2>
      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <li key={appointment.id} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-blue-600 truncate">
                  {new Date(appointment.startTime).toLocaleDateString()}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${appointment.status === 'scheduled' ? 'bg-green-100 text-green-800' : 
                      appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {appointment.status}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}