import { highlightContent } from "../../config/global";

function Highlights() {
  return (
    <div className="my-10 grid grid-cols-1 justify-items-center gap-10 xl:grid-cols-2">
      {highlightContent.map((el) => (
        <Element
          title={el.title}
          iconUrl={el.iconUrl}
          subtitle={el.subtitle}
          key={el.title}
        />
      ))}
    </div>
  );
}

export default Highlights;

function Element({ title, iconUrl, subtitle }) {
  return (
    <div className="flex w-full max-w-[800px] text-primary">
      <div className="flex min-h-[200px] min-w-[200px] items-center justify-center rounded-l-2xl bg-accent">
        <img src={iconUrl} />
      </div>
      <div className="flex grow flex-col items-center justify-center rounded-r-3xl bg-lightGrey">
        <div className="mb-2 text-4xl font-bold">{title}</div>
        <div className="max-w-[340px] text-sm">{subtitle}</div>
      </div>
    </div>
  );
}
