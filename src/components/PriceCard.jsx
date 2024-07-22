import classNames from "classnames";
import { wordsPillToHighlight } from "../../config/global";

const highlightWords = (text, words) => {
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    words.includes(part.toLowerCase()) ? (
      <span className="font-bold" key={index}>
        {part}
      </span>
    ) : (
      part
    ),
  );
};

function PriceCard({ card }) {
  const { isAccent, price, fillingPrice, flagUrl, title, pill } = card;
  const formattedPill = highlightWords(pill, wordsPillToHighlight);

  return (
    <div
      className={classNames(
        "flex h-[600px] w-[400px] min-w-[320px] flex-col items-center rounded-2xl pt-10",
        {
          "bg-accent": isAccent,
          "bg-lightGrey": !isAccent,
        },
      )}
    >
      <div
        className={classNames("text-center text-3xl font-bold lg:text-4xl", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {title}
      </div>
      <div className="my-6">
        {flagUrl && <Flags flags={flagUrl} isAccent={isAccent} />}
      </div>

      <div className="rounded-full bg-primary px-4 py-1 text-base font-semibold text-white">
        {formattedPill}
      </div>

      <div
        className={classNames("py-8 text-8xl font-bold", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {price}€
      </div>

      <div
        className={classNames(
          "cursor-pointer rounded-full px-6 py-2 text-base font-bold text-white transition-colors",
          {
            "bg-primary hover:bg-primaryLighter": isAccent,
            "bg-accent hover:bg-accentDarker": !isAccent,
          },
        )}
      >
        Réserver
      </div>
      <div className="flex-grow"></div>
      <div className="w-full p-10">
        <div
          className={classNames(
            "pricing flex flex-col items-center rounded-2xl p-4 text-2xl font-bold text-white",
            {
              "bg-accentDarker": isAccent,
              "bg-greyDarker": !isAccent,
            },
          )}
        >
          <p>Remplissage</p>
          <p className="text-3xl">{fillingPrice}€</p>
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
