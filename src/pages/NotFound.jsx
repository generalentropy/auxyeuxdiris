function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-3 text-primary">
      <p className="text-8xl font-bold">404</p>

      <p>
        <img src="images/j.png" />
      </p>
      <p className="py-2">Ben euh... comment</p>
      <p>
        Je crois que t&lsquo;as pas dû taper la bonne adresse car la page elle
        existe pas.
      </p>
    </div>
  );
}

export default NotFound;
