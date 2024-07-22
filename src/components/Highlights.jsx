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
      <div className="xs:min-h-[100px] xs:min-w-[100px] flex min-h-[80px] min-w-[80px] items-center justify-center rounded-l-2xl bg-accent sm:min-h-[150px] sm:min-w-[150px] xl:min-h-[200px] xl:min-w-[200px]">
        <img src={iconUrl} className="h-12 sm:h-16 xl:h-auto" />
      </div>
      <div className="xs:px-4 xs:py-4 flex min-h-[140px] grow flex-col items-center justify-center rounded-r-3xl bg-lightGrey p-1 text-center sm:py-6 lg:py-8">
        <div className="xs:text-xl mb-1 text-lg font-bold sm:mb-2 sm:text-3xl xl:text-4xl">
          {title}
        </div>
        <div className="xs:text-sm text-xs">{subtitle}</div>
      </div>
    </div>
  );
}
