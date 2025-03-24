"use client";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider, { CustomArrowProps } from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface BrandSliderProps {
  data: {
    img: string;
    name: string;
    job: string;
    pKey: string;
  }[];
  victor: string;
}

const PrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background: "#0EC2A7",
        position: "absolute",
        right: "55px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowLeft size={20} />
    </div>
  );
};

const NextArrow: React.FC<CustomArrowProps> = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: "40px",
        height: "40px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        background: "#0EC2A7",
        position: "absolute",
        left: "96%",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaArrowRight size={20} />
    </div>
  );
};

const SliderClient: React.FC<BrandSliderProps> = ({ data, victor }) => {
  const settings = {
    dots: true,
    speed: 3000,
    autoplaySpeed: 15000,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    infinite: true,
    cssEase: "linear",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots: React.ReactNode) => (
      <ul style={{ pointerEvents: "none" }}>{dots}</ul>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          nextArrow: <NextArrow style={{ left: "95%" }} />,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((ele,ind) => (
        <div className="box px-3" key={ind}>
          <div className="rounded-[24px] !h-auto md:!h-[250px] lg:!h-[220px] p-6 bg-white">
            <div className="flex justify-between mb-5">
              <div>
                <Image
                  width={40}
                  height={28}
                  src={victor}
                  style={{ transform: "rotateY(180deg)" }}
                  alt="vector"
                />
              </div>
              <div className="flex gap-5">
                <div className="text-end">
                  <p className="font-bold text-xl mb-2">{ele.name}</p>
                  <span className="text-[14px]">{ele.job}</span>
                </div>
                <div className="relative w-16 h-16 rounded-full">
                  <Image fill src={ele.img} alt={ele.name} />
                </div>
              </div>
            </div>
            <p className="text-[14px] text-right font-normal leading-[150%]">
              {ele.pKey}
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default SliderClient;
