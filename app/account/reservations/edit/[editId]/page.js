import UpdateReservationForm from "@/app/_components/UpdateReservationForm";
import { getBooking, getCabin } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const reservationId = params.editId;
  // const [reservation, cabin] = await Promise.all(
  //   getBooking(reservationId),
  //   getCabin(reservation.cabinId)
  // );
  const reservation = await getBooking(reservationId);
  const cabin = await getCabin(reservation.cabinId);
  const maxCapacity = cabin.maxCapacity;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-accent-400 mb-7">
        Edit Reservation #{reservationId}
      </h2>

      <UpdateReservationForm
        reservation={reservation}
        maxCapacity={maxCapacity}
      />
    </div>
  );
}
