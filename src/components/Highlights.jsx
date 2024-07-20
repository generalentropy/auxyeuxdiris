import { highlightContent } from "../../config/global";

function Highlights() {
  return (
    <div className="my-10 grid grid-cols-1 justify-items-center gap-10 xl:grid-cols-2">
      {highlightContent.map((el, i) => (
        <Element
          title={el.title}
          iconUrl={el.iconUrl}
          subtitle={el.subtitle}
          key={i}
        />
      ))}
    </div>
  );
}

export default Highlights;

function Element({ title, iconUrl, subtitle }) {
  return (
    <div className="flex w-full max-w-[800px] text-primary">
      <div className="flex min-h-[100px] min-w-[100px] items-center justify-center rounded-l-2xl bg-accent lg:min-h-[200px] lg:min-w-[200px]">
        <img src={iconUrl} className="h-12 lg:h-auto" />
      </div>
      <div className="flex grow flex-col items-center justify-center rounded-r-3xl bg-lightGrey">
        <div className="mb-2 text-xl font-bold sm:text-4xl">{title}</div>
        <div className="max-w-[340px] text-sm">{subtitle}</div>
      </div>
    </div>
  );
}
