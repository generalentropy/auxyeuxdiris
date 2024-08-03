import classNames from "classnames";

function Anchor({ divId, border, className }) {
  return (
    <div
      id={divId}
      className={classNames(className, { "border border-green-500": border })}
    ></div>
  );
}

export default Anchor;
