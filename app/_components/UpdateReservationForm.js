"use client";

import { updateReservation } from "@/app/_lib/actions";
import { useState } from "react";
import { useFormStatus } from "react-dom";
import SubmitButton from "./SubmitButton";

export default function UpdateReservationForm({ reservation, maxCapacity }) {
  const [observations, setObservations] = useState(reservation.observations);

  return (
    <form
      className="flex flex-col gap-6 px-12 py-8 text-lg bg-primary-900"
      action={updateReservation}
    >
      <div>
        <input name="reservationId" value={reservation.id} type="hidden" />
      </div>

      <div className="space-y-2">
        <label htmlFor="numGuests">How many guests?</label>
        <select
          name="numGuests"
          id="numGuests"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          required
          defaultValue={reservation.numGuests}
        >
          <option value="" key="">
            Select number of guests...
          </option>
          {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
            <option value={x} key={x}>
              {x} {x === 1 ? "guest" : "guests"}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="observations">
          Anything we should know about your stay?
        </label>
        <textarea
          name="observations"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          value={observations}
          onChange={(e) => setObservations(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-end gap-6">
        <SubmitButton pendingLabel={"Updating..."}>
          Update Reservation
        </SubmitButton>
      </div>
    </form>
  );
}
