import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import Container from "../../components/shared/Container";

const Help = () => {
  return (
    <div className="bg-[#f8fafc] py-10 lg:py-16">
      <Container>
        <div className="py-5 space-y-3">
          <h2
            className="font-bold text-2xl lg:text-3xl text-center max-w-[650px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            See how Micronet can help you improve your systems & productivity.
          </h2>

          <p
            className="text-base lg:text-lg text-center max-w-[550px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 pt-10">
          <div
            className="bg-[#e3defc] p-6 pr-10 rounded-2xl space-y-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={h1} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Task Management</h2>
            <p className="text-base">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
          <div
            className="bg-[#dffdec] p-6 pr-10 rounded-2xl space-y-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={h2} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Team Collaboration</h2>
            <p className="text-base">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
          <div
            className="bg-[#fceedf] p-6 pr-10 rounded-2xl space-y-3"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <img src={h3} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Project Planning</h2>
            <p className="text-base">
              It is a long established fact that a reader will be distracted.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Help;
