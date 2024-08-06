import Button from "../components/Button";

function AdminDashboard() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3 bg-gray-200 px-2">
      <div className="flex w-full"></div>

      <div className="flex w-full max-w-[600px] flex-col items-center justify-center gap-2 border">
        <div>Activer la fenêtre de notification :</div>
        <form className="flex w-full flex-col gap-2">
          <input
            type="text"
            className="rounded border bg-white p-2 placeholder:italic"
            placeholder="Titre de la fenêtre"
          ></input>

          <textarea
            rows={"6"}
            type="text"
            className="rounded border bg-white p-2 placeholder:italic"
            placeholder="Contenu de la fenêtre"
          ></textarea>
        </form>

        <Button text="Afficher l'aperçu" wrapperStyle={"py-2"}></Button>
      </div>
    </div>
  );
}

export default AdminDashboard;
