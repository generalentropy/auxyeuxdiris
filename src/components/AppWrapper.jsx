function AppWrapper({ children }) {
  return (
    <div className="flex justify-center">
      <div className="mx-4 w-full max-w-[1280px]">{children}</div>
    </div>
  );
}

export default AppWrapper;
