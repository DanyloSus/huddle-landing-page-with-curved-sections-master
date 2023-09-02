import { useEffect, useState } from "react";

interface ElementProps {
  num: number;
  img: string;
  text: string;
}

const Element = ({ num, img, text }: ElementProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const [animationRequestId, setAnimationRequestId] = useState<number | null>(
    null
  );

  useEffect(() => {
    const reveal = () => {
      const windowHeight = window.innerHeight;
      const elementTop =
        document.getElementById(text)?.getBoundingClientRect().top || 0;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible && !isVisible) {
        setIsVisible(true);

        setTimeout(() => {
          const startTime = performance.now();
          const duration = 1000;

          const updateCount = (timestamp: number) => {
            const progress = Math.min(1, (timestamp - startTime) / duration);
            const updatedCount = Math.min(Math.round(progress * num), num);

            setCount(updatedCount);

            if (progress < 1) {
              setAnimationRequestId(requestAnimationFrame(updateCount));
              window.removeEventListener("scroll", reveal);
            }
          };

          setAnimationRequestId(requestAnimationFrame(updateCount));
        }, 0);
      }
    };

    window.addEventListener("scroll", reveal);

    // Clean up the event listener and animation frame when the component unmounts
    return () => {
      window.removeEventListener("scroll", reveal);
      if (animationRequestId) {
        cancelAnimationFrame(animationRequestId);
      }
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect once

  return (
    <div
      className={`flex flex-col text-center items-center w-max reveal ${
        isVisible ? "active" : ""
      }`}
      id={text}
    >
      <img src={`./${img}`} alt={img} className="mr-auto lg:w-[30px]" />
      <h1 className="text-8xl lg:text-6xl">
        {count / 100000 >= 1
          ? (count / 1000000).toFixed(1)
          : count / 1000
          ? (count / 1000).toFixed(1)
          : count}{" "}
        {count / 1000000 >= 1 ? "m+" : count / 1000 ? "k+" : "+"}
      </h1>
      <p className="text-xl lg:text-sm">{text}</p>
    </div>
  );
};

export default Element;
