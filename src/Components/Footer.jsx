import { Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="service"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            Services
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-primary transition-colors cursor-pointer"
          >
            projects
          </ScrollLink>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/huzaifa454/Portfolio.git"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white text-3xl hover:text-primary transition-colors duration-300"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/huzaifa-aamir-0654b2262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white text-3xl hover:text-primary transition-colors duration-300"
            />
          </a>
        </div>
      </div>
      <div className="text-center mt-4 md:mt-0">
        <p className="text-sm">© 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
