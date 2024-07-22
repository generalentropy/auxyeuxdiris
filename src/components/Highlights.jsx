import { highlightContent } from "../../config/global";

function Highlights() {
  return (
    <div className="my-10 grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2">
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
    <div className="flex w-full text-primary lg:max-w-[800px]">
      <div className="flex min-h-[100px] min-w-[100px] items-center justify-center rounded-l-2xl bg-accent lg:min-h-[150px] lg:min-w-[150px] xl:min-h-[200px] xl:min-w-[200px]">
        <img src={iconUrl} className="h-12 lg:h-auto" />
      </div>
      <div className="flex min-h-[120px] grow flex-col items-center justify-center rounded-r-3xl bg-lightGrey px-4 text-center md:py-4">
        <div className="mb-1 text-xl font-bold lg:mb-2 lg:text-4xl">
          {title}
        </div>
        <div className="text-sm">{subtitle}</div>
      </div>
    </div>
  );
}
