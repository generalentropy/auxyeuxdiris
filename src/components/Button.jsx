import classNames from "classnames";
import { HashLink } from "react-router-hash-link";

function Button({ text, wrapperStyle, buttonStyle, onClick, hashLink }) {
  const handleClick = (e) => {
    if (!onClick) return;
    e.preventDefault();
    onClick(e);
  };

  return (
    <div className={classNames("flex", wrapperStyle)}>
      <HashLink
        to={hashLink}
        onClick={handleClick}
        className={classNames(
          "rounded-lg bg-accent px-8 py-3 font-bold text-white sm:px-14 sm:py-4 sm:text-xl",
          buttonStyle,
        )}
      >
        {text}
      </HashLink>
    </div>
  );
}

export default Button;
