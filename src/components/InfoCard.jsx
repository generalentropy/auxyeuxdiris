import classNames from "classnames";

function InfoCard({ card }) {
  const { isAccent, title, text } = card;

  return (
    <div className="flex h-[600px] min-h-full w-full max-w-[400px] flex-col items-center rounded-2xl bg-lightGrey py-10">
      <div
        className={classNames("text-center text-3xl font-bold lg:text-4xl", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {title}
      </div>
      <div className="p-4 text-lg xs:p-8 xs:text-xl">{text}</div>
    </div>
  );
}

export default InfoCard;
