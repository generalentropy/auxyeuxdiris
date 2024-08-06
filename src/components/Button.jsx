import classNames from "classnames";
import { Link } from "react-router-dom";

function Button({ text, wrapperStyle, buttonStyle, onClick, hashLink }) {
  return (
    <div className={classNames("flex", wrapperStyle)}>
      <Link
        to={hashLink}
        onClick={onClick}
        className={classNames(
          "rounded-lg bg-accent px-8 py-3 font-bold text-white sm:px-14 sm:py-4 sm:text-xl",
          buttonStyle,
        )}
      >
        {text}
      </Link>
    </div>
  );
}

export default Button;
