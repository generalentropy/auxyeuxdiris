import { FaRegCalendarCheck } from "react-icons/fa6";

function OpeningHours() {
  return (
    <div className="text-md mb-10 flex items-center justify-center rounded-2xl bg-lightGrey py-10 text-center font-bold text-primary xs:text-lg sm:text-3xl lg:text-5xl">
      <div className="flex items-center justify-around gap-3">
        <FaRegCalendarCheck size={40} />
        Jours & horaires d’ouverture
      </div>
    </div>
  );
}

export default OpeningHours;
