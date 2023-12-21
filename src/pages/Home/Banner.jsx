import Container from "../../components/shared/Container";
import heroImg from "../../assets/hero.jpg";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-10 lg:pt-16">
      <Container>
        <div className="flex flex-col md:flex-row gap-8 lg:gap-0 justify-between items-center">
          <div
            className="w-full lg:w-[48%] max-w-[600px] text-center lg:text-start space-y-2 lg:space-y-3 order-2 md:order-1 pb-10 md:pb-0"
            data-aos="fade-right"
            data-aos-duration="500"
          >
            <h1 className="font-bold text-4xl lg:text-5xl">
              Manage work <br /> Efficiently
            </h1>
            <h2 className="font-bold text-xl lg:text-2xl">
              {" "}
              Plan, Track and Organise your work.
            </h2>
            <p className="text-base lg:text-lg">
              An Intranet platform to Manage projects, organise work and focus
              on what&apos;s important.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="btn bg-[#d88531] border-[#d88531] px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
            >
              Let&apos;s Explore
            </button>
          </div>
          <div
            className="w-full lg:w-[48%] order-1 md:order-2"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <img src={heroImg} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
