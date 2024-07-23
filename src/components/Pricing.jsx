import SectionTitle from "./SectionTitle";
import { cardsData } from "../../config/global";
import CardDispatcher from "./CardDispatcher";

import { reminderText } from "../../config/global";

function Pricing() {
  return (
    <div className="flex flex-col">
      <SectionTitle
        title="Prestations & tarifs"
        subtitle="Les différentes prestations que je vous propose."
      />

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
    <div className="mb-10 flex flex-col items-center justify-center gap-3 rounded-2xl bg-accent p-6 sm:flex-row lg:gap-4 lg:p-8">
      <span>
        <img src="/icons/info.svg" alt="" className="h-12 sm:h-24" />
      </span>
      <span className="text-sm font-normal text-white xs:font-semibold lg:text-lg">
        {text}
      </span>
    </div>
  );
}
