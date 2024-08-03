import { FaRegCalendarCheck } from "react-icons/fa6";
import classNames from "classnames";
import { capitalizeFirstLetter } from "../../utils/helpers";
import { FaCircleInfo } from "react-icons/fa6";
import { hours } from "../../data/data";

function OpeningHours() {
  return (
    <>
      <div className="text-md mb-5 flex items-center justify-center rounded-2xl bg-lightGrey py-10 text-center font-bold text-primary xs:text-lg sm:text-3xl lg:mb-10 lg:text-5xl">
        <div className="flex items-center justify-around gap-3">
          <FaRegCalendarCheck size={40} />
          Jours & horaires d’ouverture
        </div>
      </div>
      <div className="flex flex-col justify-center gap-4 pb-10">
        {hours.map((el) => (
          <DaysAndHours openingTime={el} key={el.day} />
        ))}
      </div>

      <div className="flex justify-center lg:pb-10">
        <span className="flex w-full max-w-[624px] items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-5 text-center text-sm font-semibold text-white sm:px-10 sm:py-8">
          <FaCircleInfo size={20} className="hidden sm:block" />
          Uniquement sur RDV et sans accompagnant.
        </span>
      </div>
    </>
  );
}

export default OpeningHours;

function DaysAndHours({ openingTime }) {
  const { day, opening, closing, open } = openingTime;

  return (
    <div className="flex w-full justify-center gap-4 sm:gap-6">
      <div
        className={classNames(
          "flex w-full max-w-[200px] items-center justify-center rounded-2xl px-2 py-4 font-bold text-white sm:py-5",
          { "bg-accent": open, "bg-primary": !open },
        )}
      >
        {capitalizeFirstLetter(day)}
      </div>
      <div className="flex w-full max-w-[400px] items-center justify-center rounded-2xl bg-lightGrey px-2 py-4 font-bold text-primary sm:py-5">
        <span>{open ? `${opening} - ${closing}` : "Fermé"}</span>
      </div>
    </div>
  );
}
