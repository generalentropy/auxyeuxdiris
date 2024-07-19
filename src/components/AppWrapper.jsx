function AppWrapper({ children }) {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-[1280px] px-2">{children}</div>
    </div>
  );
}

export default AppWrapper;
