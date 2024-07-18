function Highlights() {
  return (
    <div className="grid grid-cols-2 gap-12">
      <Element number="1" iconUrl="icons/checkmark.svg" />
      <Element number="2" iconUrl="icons/award.svg" />
    </div>
  );
}

export default Highlights;

function Element({ number, iconUrl }) {
  return (
    <div className="flex border">
      <div className="bg-accent flex h-[200px] w-[200px] items-center justify-center">
        <img src={iconUrl} />
      </div>
      <div>Element {number}</div>
    </div>
  );
}
