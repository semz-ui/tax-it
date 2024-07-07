const Loader = () => {
  return (
    <span className="relative flex h-[100vh] w-full items-center justify-center">
      <span className="animate-ping absolute inline-flex h-20 w-20 rounded-full bg-first opacity-75"></span>
      <span className="relative inline-flex rounded-full h-20 w-20 bg-first"></span>
    </span>
  );
};

export default Loader;
