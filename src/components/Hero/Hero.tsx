import { Button } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import Fade from "react-reveal/Fade";
export const Hero = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTopics = () => {
    const toicsElement = document.getElementById("topics");
    if (toicsElement) {
      window.scrollTo({
        behavior: "smooth",
        top: toicsElement.offsetTop,
      });
    }
  };

  const handleClick = () => {
    if (location.pathname === "/") {
      navigate("/login");
    } else {
      scrollToTopics();
    }
  };
  return (
    <div className="w-full h-[calc(100vh-120px)] flex items-center justify-between">
      <Fade left cascade duration={500}>
        <div className="mx-auto">
          <h1 className="text-white text-4xl lg:text-6xl max-w-xs  font-bold">
            Get Your Payment Faster
          </h1>
          <p className="text-white mt-4 max-w-xs lg:max-w-lg">
            Blinqpay helps businesses in Africa get paid by anyone, anywhere in
            the world
          </p>

          <Button
            className="mt-4 bg-[#798AC9] text-white py-4 px-12 rounded-md"
            onClick={handleClick}
          >
            Boshlash
          </Button>
        </div>
      </Fade>
      <Fade right cascade duration={1000}>
        <div className="relative w-full h-full hidden lg:block">
          <img src="/pc.png" alt="" className="absolute top-[10%]" />
          <img
            src="/analys.png"
            alt=""
            className="absolute bottom-20 right-0 "
          />
        </div>
      </Fade>
    </div>
  );
};
