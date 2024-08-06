import classNames from "classnames";
import HighlightWords from "./HighlightWords";
import { wordsPillToHighlight } from "../../config/global";

function InfoCard({ card }) {
  const { isAccent, title, text } = card;
  const formattedText = HighlightWords(text, wordsPillToHighlight);

  return (
    <div className="flex min-h-full w-full max-w-[400px] flex-col items-center rounded-2xl bg-lightGrey py-10 md:max-h-[600px]">
      <div
        className={classNames("text-center text-3xl font-bold lg:text-4xl", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {title}
      </div>
      <div className="p-4 text-lg xs:p-8 xs:text-xl">{formattedText}</div>
    </div>
  );
}

export default InfoCard;
