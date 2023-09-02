const Header = () => {
  return (
    <header className="flex justify-between items-center px-16 py-20">
      <img src="./logo.svg" alt="logo" />
      <button className="border border-pink text-pink hover:opacity-70 transition-opacity w-[136px] h-10 rounded-full">
        Try It Free
      </button>
    </header>
  );
};

export default Header;
