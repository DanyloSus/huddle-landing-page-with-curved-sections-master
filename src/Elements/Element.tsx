interface ElementProps {
  num: number;
  img: string;
  text: string;
}

const Element = ({ num, img, text }: ElementProps) => {
  return (
    <div className="flex flex-col text-center items-center w-max">
      <img src={`./${img}`} alt={img} className="mr-auto" />
      <h1 className="text-8xl">{num}</h1>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export default Element;
