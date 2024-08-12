"use client";

import { createContext, useContext, useState } from "react";

const initialState = { from: undefined, to: undefined };

const ReservationContext = createContext(initialState);

export default function ReservationContextProvider({ children }) {
  const [range, setRange] = useState(initialState);

  const resetRange = () => setRange(initialState);

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

export function useReservationContext(params) {
  const context = useContext(ReservationContext);

  if (context === undefined)
    throw new Error("Context waas used outside provider!");

  return context;
}
