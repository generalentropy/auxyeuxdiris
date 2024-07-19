import classNames from "classnames";
import { wordsPillToHighlight } from "../../config/global";

const highlightWords = (text, words) => {
  const regex = new RegExp(`(${words.join("|")})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) =>
    words.includes(part.toLowerCase()) ? (
      <strong key={index}>{part}</strong>
    ) : (
      part
    ),
  );
};

function PriceCard({ isAccent, flags, title, pill, price }) {
  const formattedPill = highlightWords(pill, wordsPillToHighlight);

  return (
    <div
      className={classNames(
        "flex h-[600px] w-[400px] min-w-[320px] flex-col items-center rounded-3xl",
        {
          "bg-accent": isAccent,
          "bg-lightGrey": !isAccent,
        },
      )}
    >
      <div
        className={classNames(
          "pt-10 text-center text-3xl font-bold lg:text-4xl",
          {
            "text-white": isAccent,
            "text-primary": !isAccent,
          },
        )}
      >
        {title}
      </div>
      <div className="my-6">
        {flags && <Flags flags={flags} isAccent={isAccent} />}
      </div>

      <div className="rounded-full bg-primary px-4 py-1 text-base font-semibold text-white">
        {formattedPill}
      </div>

      <div
        className={classNames("py-6 text-8xl font-bold", {
          "text-white": isAccent,
        })}
      >
        {price}€
      </div>

      <div
        className={classNames(
          "rounded-full px-6 py-2 text-base font-bold text-white",
          {
            "bg-primary": isAccent,
            "bg-accent": !isAccent,
          },
        )}
      >
        Réserver
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
