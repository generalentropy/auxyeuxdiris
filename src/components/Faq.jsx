import Accordion from "./Accordion";
import Anchor from "./Anchor";
import SectionTitle from "./SectionTitle";

function Faq() {
  return (
    <>
      <Anchor divId="faq" />
      <div>
        <SectionTitle
          title={`Foire aux questions`}
          subtitle={`Retrouvez ci-dessous les questions fréquemment posées par nos clientes`}
        />

        <Accordion />
      </div>
    </>
  );
}

export default Faq;
