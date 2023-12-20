import Container from "../../components/shared/Container";
import b1 from "../../assets/b1.png";
import b2 from "../../assets/b2.png";
import b3 from "../../assets/b3.png";
import b4 from "../../assets/b4.png";

const WhoCan = () => {
  return (
    <div className="bg-[#f8fafc] py-10 lg:py-16">
      <Container>
        <div className="py-5 space-y-3">
          <h2 className="font-bold text-2xl lg:text-3xl text-center max-w-[650px] mx-auto">
            Who can benefit from this?
          </h2>

          <p className="text-base lg:text-lg text-center max-w-[550px] mx-auto">
            Maximize Your Productivity with Our Time Management Tools
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 pt-10">
          <div className="border p-6 pr-10 rounded-xl space-y-3">
            <img src={b1} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Developers</h2>
            <p className="text-base">
              Streamline your workflow and boost productivity with our tailored
              solutions designed for coding and project management.
            </p>
          </div>
          <div className="border p-6 pr-10 rounded-xl space-y-3">
            <img src={b2} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Designers</h2>
            <p className="text-base">
              Elevate your creative process by organizing design tasks, and
              ensuring a seamless workflow and innovative outcomes.
            </p>
          </div>
          <div className="border p-6 pr-10 rounded-xl space-y-3">
            <img src={b3} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Bankers</h2>
            <p className="text-base">
              Optimize your time management to balance financial analyses,
              client meetings, and administrative tasks seamlessly.
            </p>
          </div>
          <div className="border p-6 pr-10 rounded-xl space-y-3">
            <img src={b4} className="w-14" alt="" />
            <h2 className="text-xl font-bold">Students</h2>
            <p className="text-base">
              Master time allocation for studies, assignments, and personal
              commitments effectively.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WhoCan;
