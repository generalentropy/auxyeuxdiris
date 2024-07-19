import InfoCard from "./InfoCard";
import PriceCard from "./PriceCard";
import Remove from "./Remove";

function CardDispatcher({ card }) {
  switch (card.type) {
    case "presta":
      return <PriceCard />;
    case "depose":
      return <Remove />;
    case "info":
      return <InfoCard />;
    default:
      return null;
  }
}

export default CardDispatcher;
