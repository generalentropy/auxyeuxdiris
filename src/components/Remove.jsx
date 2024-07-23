import classNames from "classnames";

function Remove({ card }) {
  const { title, isAccent, iconUrl, pill, price } = card;
  return (
    <div
      className={classNames(
        "flex h-[600px] w-full max-w-[400px] flex-col items-center rounded-2xl p-5 py-10",
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

      <div className="rounded-full bg-primary px-4 py-1 text-center text-sm font-semibold text-white xs:text-base">
        {pill}
      </div>

      <div
        className={classNames("py-8 text-8xl font-bold", {
          "text-white": isAccent,
          "text-primary": !isAccent,
        })}
      >
        {price}€
      </div>
      <div className="flex-grow"></div>
    </div>
  );
}

export default Remove;
