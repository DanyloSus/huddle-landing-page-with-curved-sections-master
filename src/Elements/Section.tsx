interface SectionProps {
  h2: string;
  p: string;
  img: string;
  imgTop?: string;
  imgBottom?: string;
  imgTopM?: string;
  imgBottomM?: string;
}

const Section = ({
  h2,
  p,
  img,
  imgBottom,
  imgTop,
  imgBottomM,
  imgTopM,
}: SectionProps) => {
  return (
    <section className="my-[100px] lg:text-center reveal">
      {imgTopM && (
        <img
          src={`./${imgTopM}`}
          alt={imgTopM}
          className="w-screen object-cover lg:block hidden"
        />
      )}
      {imgTop && (
        <img
          src={`./${imgTop}`}
          alt={imgTop}
          className="w-screen object-cover lg:hidden"
        />
      )}
      <div
        className={`flex px-[130px] gap-[120px] items-center xl:flex-nowrap flex-wrap lg:px-9 lg:text-center lg:gap-[60px] lg:py-[60px] ${
          imgTop && "bg-very-pale-blue"
        }`}
      >
        <img src={`./${img}`} alt={img} className="hidden lg:block" />
        {!imgBottom && (
          <img
            src={`./${img}`}
            alt={img}
            className="max-w-[532px] object-cover lg:hidden"
          />
        )}
        <div className="flex gap-10 flex-col w-auto lg:gap-5">
          <h2 className="text-[43px] lg:text-xl">{h2}</h2>
          <p className="lg:text-[13.4299px]">{p}</p>
        </div>
        {imgBottom && (
          <img
            src={`./${img}`}
            alt={img}
            className="max-w-[532px] w-auto object-cover lg:hidden"
          />
        )}
      </div>
      {imgBottom && (
        <img
          src={`./${imgBottom}`}
          alt={imgBottom}
          className="w-screen object-cover lg:hidden"
        />
      )}
      {imgBottomM && (
        <img
          src={`./${imgBottomM}`}
          alt={imgBottomM}
          className="w-screen object-cover lg:block hidden"
        />
      )}
    </section>
  );
};

export default Section;
