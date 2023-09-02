interface ElementProps {
  num: number;
  img: string;
  text: string;
}

const Element = ({ num, img, text }: ElementProps) => {
  return (
    <div className="flex flex-col text-center items-center w-max">
      <img src={`./${img}`} alt={img} className="mr-auto lg:w-[30px]" />
      <h1 className="text-8xl lg:text-6xl">{num}</h1>
      <p className="text-xl lg:text-sm">{text}</p>
    </div>
  );
};

export default Element;
