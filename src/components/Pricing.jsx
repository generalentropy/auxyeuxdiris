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
        <div className="mb-10 grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {cardsData.map((card, i) => (
            <CardDispatcher card={card} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;
