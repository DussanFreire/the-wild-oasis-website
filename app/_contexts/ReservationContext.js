"use client";

import React, { createContext, useContext, useState } from "react";

const ReservationContext = createContext();
const initialState = { from: null, to: null };

function ReservationProvider({ children }) {
  const [range, setRange] = useState(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

function useReservation() {
  const context = useContext(ReservationContext);
  if (context === undefined) {
    throw new Error("Reservation context was used outside the provider");
  }
  return context;
}

export { useReservation, ReservationProvider };
