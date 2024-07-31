import { useMediaQuery } from "react-responsive";
import SectionTitle from "./SectionTitle";
import { LuMailQuestion } from "react-icons/lu";
import { useState } from "react";
import { web3FormPublicAccessKey } from "../../config/global";
import { ThreeDots } from "react-loader-spinner";
import { RiMailSendLine } from "react-icons/ri";
import classNames from "classnames";
import { triggerConfetti } from "../../utils/confetti";

function Contact() {
  const [result, setResult] = useState("");
  const isMobile = useMediaQuery({ maxWidth: 768 }); // TW md breakpoint

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("sending");
    const formData = new FormData(event.target);
    formData.append("access_key", web3FormPublicAccessKey);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      triggerConfetti();
      setResult("Message envoyé avec succès 👍");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 4000);
    } else {
      console.log("Erreur", data);
      setResult(data.message);
      setTimeout(() => {
        setResult("");
      }, 4000);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <SectionTitle
        title={`Contact`}
        Icon={LuMailQuestion}
        iconStyle={"mr-1 md:mr-4"}
        iconSize={isMobile ? 26 : 42}
      />

      <div className="mb-10 flex justify-center text-primary">
        <p className="max-w-[600px] px-4 text-center text-sm md:text-base lg:text-lg">
          Vous souhaitez prendre un rendez-vous&nbsp;? Vous avez des
          questions&nbsp;? Contactez-moi dès maintenant.
        </p>
      </div>

      <div className="mb-10 flex w-full max-w-[800px] flex-col items-center justify-center">
        <form className="flex w-full flex-col gap-2" onSubmit={onSubmit}>
          <input
            type="hidden"
            name="subject"
            value="Nouveau contact depuis auxyeuxdiris.fr"
          />

          <input type="checkbox" name="botcheck" className="hidden" />

          <div className="flex flex-col gap-2 lg:flex-row">
            <input
              type="text"
              name="Nom et prénom :"
              placeholder="Nom & prénom"
              className="h-[40px] w-full rounded-lg border border-slate-300 pl-4 placeholder:text-sm placeholder:italic placeholder:opacity-70 lg:h-[60px]"
              required
            />

            <input
              type="number"
              name="Numéro de téléphone :"
              placeholder="Téléphone"
              className="h-[40px] w-full rounded-lg border border-slate-300 pl-4 placeholder:text-sm placeholder:italic placeholder:opacity-70 lg:h-[60px]"
              required
            />
          </div>

          <input
            type="email"
            name="Email de contact :"
            placeholder="exemple@domaine.com"
            className="h-[40px] rounded-lg border border-slate-300 pl-4 placeholder:text-sm placeholder:italic placeholder:opacity-70 lg:h-[60px]"
            required
          />

          <select
            id="choix"
            name="Objet de la demande : "
            className="text-md h-[40px] rounded-lg border border-slate-300 pl-4 text-gray-600 placeholder:text-sm placeholder:italic placeholder:opacity-70 lg:h-[60px]"
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionnez l&lsquo;objet du message
            </option>
            <option value="Prise de rendez-vous">Prise de rendez-vous </option>
            <option value="Demande d'information">
              Demande d&lsquo;information
            </option>
            <option value="Partenariat / stage">Partenariat / stage</option>
            <option value="Propositions commerciales">
              Propositions commerciales
            </option>
            <option value="Autre">Autre</option>
          </select>

          <textarea
            id="form-message"
            name="Message :"
            rows={isMobile ? "7" : "10"}
            className="w-full rounded-lg border border-slate-300 pl-4 pt-4 placeholder:text-sm placeholder:italic placeholder:opacity-70"
            placeholder="Votre message"
          />

          <button
            type="submit"
            className="flex h-[60px] items-center justify-center rounded-lg bg-accent px-3 py-2 font-bold text-white transition hover:bg-accentDarker lg:px-6"
          >
            Envoyer <RiMailSendLine className="ml-2" size={20} />
          </button>
        </form>

        <div
          className={classNames(
            "flex h-12 w-full items-center justify-center py-2 font-medium text-gray-600",
          )}
        >
          {result === "sending" ? "" : result} <Loader result={result} />
        </div>
      </div>
    </div>
  );
}

export default Contact;

function Loader({ result }) {
  return (
    <>
      {result === "sending" && (
        <ThreeDots
          visible={true}
          height="40"
          width="50"
          color="#132136"
          radius="9"
          ariaLabel="three-dots-loading"
        />
      )}
    </>
  );
}
