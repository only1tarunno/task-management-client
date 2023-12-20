import { Link, useNavigate } from "react-router-dom";
import Container from "../components/shared/Container";
import InnerPageBanner from "../components/shared/InnerPageBanner";

const FAQPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <InnerPageBanner
        subTitle="FAQ"
        title="Frequently Asked Question"
      ></InnerPageBanner>
      <Container>
        <div className="pt-20">
          <h2 className="text-2xl font-bold text-[#333] text-center">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-[#555] text-center pt-1">
            Last Updated on December 21, 2023
          </p>
        </div>
        <div className="join join-vertical w-full my-20">
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" checked="checked" />
            <div className="collapse-title font-bold text[#333]">
              What is Change Management in Project Management?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Dramatically seize best-of-breed opportunities before
                bleeding-edge platforms. Enthusiastically restore reliable
                experiences without compelling benefits. Appropriately target
                enabled resources and.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              What is Earned Value in Project Management?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Competently synergize stand-alone outsourcing via transparent
                benefits. Intrinsicly grow plug-and-play benefits through
                e-business vortals. Progressively optimize 24/7 vortals for
                intuitive information. Monotonectally customize collaborative
                web services via front-end applications.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              What is PERT in Project Management?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Dramatically seize best-of-breed opportunities before
                bleeding-edge platforms. Enthusiastically restore reliable
                experiences without compelling benefits. Appropriately target
                enabled resources and.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              What are Technical Requirements in Project Management?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Dramatically seize best-of-breed opportunities before
                bleeding-edge platforms. Enthusiastically restore reliable
                experiences without compelling benefits. Appropriately target
                enabled resources and.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-[#ececec]">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title font-bold text[#333]">
              What Is Portfolio in Project Management?
            </div>
            <div className="collapse-content">
              <p className="text-sm">
                Dramatically seize best-of-breed opportunities before
                bleeding-edge platforms. Enthusiastically restore reliable
                experiences without compelling benefits. Appropriately target
                enabled resources and.
              </p>
            </div>
          </div>
        </div>
        <div className="border border-[#ececec] rounded py-12 text-center mb-20">
          <h2 className="text-2xl font-bold text-[#333] text-center">
            Still Have Question? Contact Us
          </h2>
          <Link to="/contact" className="inline-block pt-5">
            <button
              onClick={() => navigate("/login")}
              className="btn  bg-[#d88531] border-[#d88531] px-4 lg:px-8 rounded  hover:bg-[#4c5161] hover:border-[#4c5161] text-white font-medium uppercase"
            >
              CONTACT US
            </button>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default FAQPage;
