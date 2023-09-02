import Section from "./Section";

const Sections = () => {
  return (
    <>
      <Section
        img="illustration-grow-together.svg"
        h2="Grow Together"
        p="Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form."
        imgTop="bg-section-top-desktop-1.svg"
        imgBottom="bg-section-bottom-desktop-1.svg"
        imgTopM="bg-section-top-mobile-1.svg"
        imgBottomM="bg-section-bottom-mobile-1.svg"
      />
      <Section
        img="illustration-flowing-conversation.svg"
        h2="Flowing Conversations"
        p="You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow."
      />
      <Section
        img="illustration-your-users.svg"
        h2="Your Users"
        p="It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately."
        imgTop="bg-section-top-desktop-2.svg"
        imgBottom="bg-section-bottom-desktop-2.svg"
        imgTopM="bg-section-top-mobile-2.svg"
        imgBottomM="bg-section-bottom-mobile-2.svg"
      />
    </>
  );
};

export default Sections;
