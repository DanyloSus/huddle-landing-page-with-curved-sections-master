import { useState } from "react";

const Footer = () => {
  const [data, setData] = useState<null | string>(null);

  const handleChange = (e: any) => {
    setData(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const inp = document.getElementById("inp");
    const err = document.getElementById("err");
    if (err && inp) {
      if (data) {
        inp.classList.remove("border-light-red");
        err.classList.remove("block");
      } else {
        inp.classList.add("border-light-red");
        err.classList.remove("hidden");
      }
    }
  };

  return (
    <footer className="mt-[100px] text-white">
      <img
        src="./bg-footer-top-mobile.svg"
        alt="bg footer top mobile"
        className="w-screen object-cover lg:block hidden"
      />
      <img
        src="./bg-footer-top-desktop.svg"
        alt="bg footer top desktop"
        className="w-screen object-cover lg:hidden"
      />
      <div className="w-screen h-auto pb-[104px] px-[120px] bg-very-dark-cyan flex justify-between pt-10 lg:px-7 lg:flex-col-reverse lg:items-center">
        <div className="max-w-[300px] flex flex-col gap-3 lg:text-sm lg:gap-6">
          <img src="./logo.png" alt="logo" className="w-[240px]" />
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.
          </p>
          <p>
            <img src="./icon-phone.svg" alt="icon phone" /> Phone:
            +1-543-123-4567
          </p>
          <p>
            <img src="./icon-email.svg" alt="icon email" /> example@huddle.com
          </p>
          <div className="flex gap-5 mt-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
            </svg>
          </div>
        </div>
        <div className="max-w-[520px] w-full flex flex-col gap-5">
          <h3 className="text-2xl">Newsletter</h3>
          <p className="w-[336px] text-sm lg:text-[15.5px]">
            To recieve tips on how to grow your community, sign up to our weekly
            newsletter. We’ll never send you spam or pass on your email address
          </p>
          <form
            className="flex gap-5 w-full lg:flex-col relative"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              onChange={handleChange}
              value={data ? data : ""}
              className="text-black max-w-[320px] h-12 border rounded-lg w-full"
              id="inp"
              required
            />
            <span className="hidden absolute top-12 text-light-red" id="err">
              Error
            </span>
            <button className="max-w-[160px] w-full h-12 text-white bg-pink shadow-xl rounded-lg hover:opacity-50 transition-opacity text-base font-semibold mb-20 lg:ml-auto">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
