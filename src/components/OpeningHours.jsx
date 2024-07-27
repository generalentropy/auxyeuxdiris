import { FaRegCalendarCheck } from "react-icons/fa6";

function OpeningHours() {
  return (
    <div>
      <div className="mb-10 flex items-center justify-center gap-4 rounded-2xl bg-lightGrey py-10 text-2xl font-bold text-primary sm:text-3xl lg:text-5xl">
        <FaRegCalendarCheck size={40} />
        Jours & horaires d’ouverture
      </div>
    </div>
  );
}

export default OpeningHours;
