const Intro = () => {
  return (
    <section className="text-center max-w-[1016px] mx-auto flex flex-col gap-10 items-center mt-[200px] lg:max-w-[290px] lg:mt-[100px] lg:gap-5">
      <h1 className="text-5xl lg:text-2xl">
        Build The Community Your Fans Will Love
      </h1>
      <p className="max-w-[600px] text-xl lg:text-[13px] leading-5">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="text-white bg-pink shadow-xl rounded-full max-w-[400px] w-full h-20 hover:opacity-50 transition-opacity text-xl font-semibold mb-20 lg:max-w-[200px] lg:h-10 lg:text-sm">
        Get Started For Free
      </button>
      <img src="./screen-mockups.svg" alt="screen-mockups.svg" />
    </section>
  );
};

export default Intro;
