import classNames from "classnames";

function Remove({ isAccent }) {
  return (
    <div
      className={classNames("h-[600px] w-full max-w-[400px] rounded-2xl", {
        "bg-accent": isAccent,
        "bg-lightGrey": !isAccent,
      })}
    >
      <div className="flex-grow"></div>
    </div>
  );
}

export default Remove;
