import { useMediaQuery } from "react-responsive";
import SectionTitle from "./SectionTitle";
import { LuMailQuestion } from "react-icons/lu";

function Contact() {
  const isMobile = useMediaQuery({ maxWidth: 768 }); // tw md breakpoint
  return (
    <div>
      <SectionTitle
        title={`Contact`}
        Icon={LuMailQuestion}
        iconStyle={"mr-1 md:mr-2"}
        iconSize={isMobile ? 26 : 42}
      />

      <div className="mb-10 flex justify-center text-primary">
        <p className="max-w-[600px] text-center text-sm md:text-base lg:text-lg">
          Vous souhaitez prendre un rendez-vous&nbsp;? Vous avez des
          questions&nbsp;? Contactez-moi dès maintenant.
        </p>
      </div>
    </div>
  );
}

export default Contact;
