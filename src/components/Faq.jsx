import Accordion from "./Accordion";
import SectionTitle from "./SectionTitle";

function Faq() {
  return (
    <>
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
