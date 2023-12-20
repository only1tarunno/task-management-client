import { Link } from "react-router-dom";
import Container from "../shared/Container";
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#fafafa] py-10 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10">
          <div>
            <h2 className="text-3xl lg:text-5xl font-bold">TimeCraft</h2>
            <p className="pt-3  lg:text-xl text-lg">
              We are TimeCraft, get your business to the new heights in no time.
              It is easy with TimeCraft.
            </p>
            <p className="pt-3  lg:text-xl text-lg">
              2118 Thornridge Cir. Syracuse, Connecticut 35624
            </p>
          </div>
          <div className="pl-0 lg:pl-24">
            <h2 className="text-2xl font-bold">Pages</h2>
            <ul className="pt-2">
              <li>
                <Link className="text-lg hover:text-[#d88531]" to="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-lg hover:text-[#d88531]" to="/home">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-lg hover:text-[#d88531]" to="/home">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Contact</h2>
            <div className="pt-3">
              <a
                className="text-lg hover:text-[#d88531] flex items-center"
                href="tel:+8801569130064"
              >
                <span className="pr-1">
                  <FaPhoneAlt />
                </span>
                +8801569130064
              </a>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://twitter.com/only1tarunno">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-[#d88531]"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCumv4PmrVa8zpoOJW0Amw9w">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-[#d88531]"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a href="https://www.facebook.com/only1tarunno">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current hover:text-[#d88531]"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
