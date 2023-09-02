const Intro = () => {
  return (
    <section className="text-center max-w-[1016px] mx-auto flex flex-col gap-10 items-center mt-[200px]">
      <h1 className="text-5xl">Build The Community Your Fans Will Love</h1>
      <p className="w-[600px] text-xl">
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <button className="text-white bg-pink shadow-xl rounded-full w-[400px] h-20 hover:opacity-50 transition-opacity text-xl font-semibold mb-20">
        Get Started For Free
      </button>
      <img src="./screen-mockups.svg" alt="screen-mockups.svg" />
    </section>
  );
};

export default Intro;
