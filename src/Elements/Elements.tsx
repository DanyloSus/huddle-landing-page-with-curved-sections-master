import Element from "./Element";

const Elements = () => {
  return (
    <section className="flex justify-between max-w-[872px] mx-auto my-[100px] lg:flex-col lg:gap-20 lg:items-center">
      <Element
        img="icon-communities.svg"
        text="Communities Formed"
        num={1400}
      />
      <Element img="icon-messages.svg" text="Messages Sent" num={2700000} />
    </section>
  );
};

export default Elements;
