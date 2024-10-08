import classNames from "classnames";
import HighlightWords from "./HighlightWords";
import { wordsPillToHighlight } from "../../config/global";

function Remove({ card }) {
  const { title, isAccent, iconUrl, pill, price, text } = card;
  const formattedText = HighlightWords(text, wordsPillToHighlight);

  return (
    <div
      className={classNames(
        "flex w-full max-w-[400px] flex-col items-center rounded-2xl p-5 py-10 md:max-h-[600px]",
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

      <div className="my-6 flex items-center justify-center">
        <div
          className={classNames("mx-4 text-2xl font-bold", {
            "text-white": isAccent,
          })}
        >
          <img src={iconUrl} alt="" />
        </div>
      </div>

      <div className="rounded-full bg-primary px-2 py-1 text-center text-sm font-semibold text-white xs:px-4 xs:text-base">
        {pill}
      </div>

      <div
        className={classNames("py-8 text-7xl font-bold xs:text-8xl", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {price}€
      </div>

      <div className="text-lg xs:px-2 xs:text-xl">{formattedText}</div>
    </div>
  );
}

export default Remove;
