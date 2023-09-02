interface SectionProps {
  h2: string;
  p: string;
  img: string;
  imgTop?: string;
  imgBottom?: string;
}

const Section = ({ h2, p, img, imgBottom, imgTop }: SectionProps) => {
  return (
    <section className="my-[100px]">
      {imgTop && <img src={`./${imgTop}`} alt={imgTop} />}
      <div
        className={`flex px-[130px] gap-[120px] items-center ${
          imgTop && "bg-very-pale-blue"
        }`}
      >
        {!imgBottom && (
          <img src={`./${img}`} alt={img} className="w-[532px] object-cover" />
        )}
        <div className="flex gap-10 flex-col">
          <h2 className="text-[43px]">{h2}</h2>
          <p>{p}</p>
        </div>
        {imgBottom && (
          <img
            src={`./${img}`}
            alt={img}
            className="max-w-[532px] object-cover"
          />
        )}
      </div>
      {imgBottom && <img src={`./${imgBottom}`} alt={imgBottom} />}
    </section>
  );
};

export default Section;
