const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-20 lg:py-12 lg:px-6">
      <img src="./logo.svg" alt="logo" className="lg:w-[96px]" />
      <button className="border border-pink text-pink hover:opacity-50 transition-opacity w-[136px] h-10 rounded-full lg:w-20 lg:h-6 lg:text-xs">
        Try It Free
      </button>
    </header>
  );
};

export default Header;
