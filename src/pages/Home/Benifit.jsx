import Container from "../../components/shared/Container";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";

const Benifit = () => {
  return (
    <div className=" py-10 lg:py-16">
      <Container>
        <div className="py-5 space-y-3">
          <h2
            className="font-bold text-2xl lg:text-3xl text-center max-w-[650px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            What types of people use this website?
          </h2>

          <p
            className="text-base lg:text-lg text-center max-w-[550px] mx-auto"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            How individuals from various backgrounds thrive with Our time
            management solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 pt-10">
          <div
            className="card card-compact  bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <figure>
              <img src={p1} className="w-full" />
            </figure>
            <div className="px-5 py-8">
              <h2 className="card-title font-bold text-2xl">Jim Moreana</h2>
              <p className="text-lg">Web Developer</p>
            </div>
          </div>
          <div
            className="card card-compact  bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <figure>
              <img src={p2} className="w-full" />
            </figure>
            <div className="px-5 py-8">
              <h2 className="card-title font-bold text-2xl">James Gardner</h2>
              <p className="text-lg">Intern</p>
            </div>
          </div>
          <div
            className="card card-compact  bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <figure>
              <img src={p3} className="w-full" />
            </figure>
            <div className="px-5 py-8">
              <h2 className="card-title font-bold text-2xl">John Doe</h2>
              <p className="text-lg">Desinger</p>
            </div>
          </div>
          <div
            className="card card-compact  bg-base-100 shadow-xl"
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <figure>
              <img src={p4} className="w-full" />
            </figure>
            <div className="px-5 py-8">
              <h2 className="card-title font-bold text-2xl">Jane Buffet</h2>
              <p className="text-lg">Teacher</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benifit;
