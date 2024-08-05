import classNames from "classnames";
import { wordsPillToHighlight } from "../../config/global";
import HighlightWords from "./HighlightWords";
import { Link } from "react-router-dom";

function PriceCard({ card }) {
  const { isAccent, price, fillingPrice, flagUrl, title, pill } = card;
  const formattedPill = HighlightWords(pill, wordsPillToHighlight);

  return (
    <div
      className={classNames(
        "flex w-full max-w-[400px] flex-col items-center rounded-2xl pt-10 md:min-h-[600px]",
        {
          "bg-accent": isAccent,
          "bg-lightGrey": !isAccent,
        },
      )}
    >
      <div
        className={classNames(
          "px-2 text-center text-3xl font-bold lg:text-4xl",
          {
            "text-white": isAccent,
            "text-primary": !isAccent,
          },
        )}
      >
        {title}
      </div>
      <div className="my-6">
        {flagUrl && <Flags flags={flagUrl} isAccent={isAccent} />}
      </div>

      <div className="rounded-full bg-primary px-5 py-1 text-center text-sm font-semibold text-white xs:text-base">
        {formattedPill}
      </div>

      <div
        className={classNames("py-8 text-7xl font-bold xs:text-8xl", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {price}€
      </div>

      <Link
        to="#contact"
        className={classNames(
          "cursor-pointer rounded-full px-6 py-2 text-base font-bold text-white transition-colors sm:text-xl",
          {
            "bg-primary hover:bg-primaryLighter": isAccent,
            "bg-accent hover:bg-accentDarker": !isAccent,
          },
        )}
      >
        Réserver
      </Link>
      <div className="flex-grow"></div>
      <div className="w-full p-10">
        <div
          className={classNames(
            "pricing flex flex-col items-center gap-2 rounded-2xl p-4 text-2xl font-bold text-white",
            {
              "bg-accentDarker": isAccent,
              "bg-greyDarker": !isAccent,
            },
          )}
        >
          <p>Remplissage</p>
          <p className="text-4xl">{fillingPrice}€</p>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;

function Flags({ flags, isAccent }) {
  if (!flags || flags.length === 0) {
    return null;
  }

  if (flags.length === 1) {
    return (
      <div className="flex justify-center">
        <img src={flags[0]} alt="" />
      </div>
    );
  }

  if (flags.length === 2) {
    return (
      <div className="flex items-center justify-center">
        <img src={flags[0]} alt="" />
        <span
          className={classNames("mx-4 text-2xl font-bold", {
            "text-white": isAccent,
          })}
        >
          &
        </span>
        <img src={flags[1]} alt="" />
      </div>
    );
  }

  return null;
}
