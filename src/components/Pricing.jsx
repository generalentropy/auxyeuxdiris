import SectionTitle from "./SectionTitle";
import CardDispatcher from "./CardDispatcher";
import { FaRegSnowflake } from "react-icons/fa";
import { cardsData, reminderText } from "../../data/data";
import Anchor from "./Anchor";

function Pricing() {
  return (
    <div className="flex flex-col justify-items-center">
      <Anchor divId="tarifs" />
      <SectionTitle
        title="Prestations & tarifs"
        subtitle="Les différentes prestations que je vous propose."
      />

      <div className="flex justify-center">
        <div className="mb-5 flex items-center justify-center gap-2 rounded-full bg-sky-400 px-12 py-3 text-center font-semibold text-white lg:mb-10">
          <span className="flex items-center lg:text-lg">
            Pour votre confort, salon entièrement climatisé
            <FaRegSnowflake size={22} className="ml-2 hidden md:block" />
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="mb-10 grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {cardsData.map((card, i) => (
            <CardDispatcher card={card} key={i} />
          ))}
        </div>
      </div>
      <Reminder text={reminderText} />
    </div>
  );
}

export default Pricing;

function Reminder({ text }) {
  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-accent p-6 xs:flex-row lg:gap-4 lg:p-8">
      <span>
        <img
          src="/icons/info.svg"
          alt=""
          className="hidden sm:block sm:h-auto"
        />
      </span>
      <span className="text-sm font-normal text-white xs:font-semibold lg:text-lg">
        {text}
      </span>
    </div>
  );
}
