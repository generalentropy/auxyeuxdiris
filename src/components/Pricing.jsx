import PriceCard from "./PriceCard";
import SectionTitle from "./SectionTitle";

function Pricing() {
  return (
    <div className="flex w-full flex-col">
      <SectionTitle
        title="Prestations & tarifs"
        subtitle="Les différentes prestations que je vous propose."
      />

      <div className="flex min-h-full min-w-full gap-10">
        <PriceCard
          isAccent={false}
          flags={["/icons/south-korea.svg"]}
          title="La pose cil à cil"
          pill="Classique"
          price={"70"}
          fillingPrice="50"
        />
        <PriceCard
          pill="Cil à cil & Volume Russe léger"
          isAccent={true}
          title="La pose mixte"
          flags={["/icons/south-korea.svg", "/icons/russia.svg"]}
          price={"80"}
          fillingPrice="55"
        />
        <PriceCard
          isAccent={false}
          flags={["/icons/south-korea.svg"]}
          title="Le volume Russe 3D"
          pill="Classique"
          price={"90"}
          fillingPrice="60"
        />
      </div>
    </div>
  );
}

export default Pricing;
