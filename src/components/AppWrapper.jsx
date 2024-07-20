function AppWrapper({ children }) {
  return (
    <div className="flex justify-center overflow-x-hidden">
      <div className="w-full max-w-[1280px]">{children}</div>
    </div>
  );
}

export default AppWrapper;
