import classNames from "classnames";

function Anchor({ divId, border }) {
  return (
    <div
      id={divId}
      className={classNames({ "border border-green-500": border })}
    ></div>
  );
}

export default Anchor;
