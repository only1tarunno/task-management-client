import Container from "../../components/shared/Container";
import happy from "../../assets/happy_girl.png";

const Testimonial = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#23a6d5] to-[#23d5ab] pt-10 pb-10 lg:pt-16 lg:pb-0"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <div className="space-y-4 lg:w-[48%] w-full ">
            <h2 className="font-bold text-2xl lg:text-3xl text-white ">
              We love our customers and they love us too.
            </h2>
            <p className="text-base lg:text-lg text-white ">
              We love our customers and they love us too. It is a long
              established fact that a reader will be distracted. It is a long
              established fact that a reader will be distracted.
            </p>
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[48%] hidden lg:block">
            <img src={happy} className="w-full" alt="" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Testimonial;
