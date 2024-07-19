import SectionTitle from "./SectionTitle";
import { cardsData } from "../../config/global";
import CardDispatcher from "./CardDispatcher";

function Pricing() {
  return (
    <div className="flex flex-col">
      <SectionTitle
        title="Prestations & tarifs"
        subtitle="Les différentes prestations que je vous propose."
      />

      <div className="flex justify-center">
        <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cardsData.map((card, i) => (
            <CardDispatcher card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
