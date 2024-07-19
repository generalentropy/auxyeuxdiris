import InfoCard from "./InfoCard";
import PriceCard from "./PriceCard";
import Remove from "./Remove";

function CardDispatcher({ card }) {
  switch (card.type) {
    case "pose":
      return <PriceCard card={card} />;
    case "depose":
      return <Remove card={card} />;
    case "info":
      return <InfoCard card={card} />;
    default:
      return null;
  }
}

export default CardDispatcher;
