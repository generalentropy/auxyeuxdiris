import classNames from "classnames";

function Button({ link, text, wrapperStyle, buttonStyle }) {
  return (
    <div className={classNames("flex", wrapperStyle)}>
      <a
        href={`#${link ? link : ""}`}
        className={classNames(
          "rounded-lg bg-accent px-8 py-3 font-bold text-white sm:px-14 sm:py-4 sm:text-xl",
          buttonStyle,
        )}
      >
        {text}
      </a>
    </div>
  );
}

export default Button;
