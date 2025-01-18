import picture from "../assets/pic2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <div className="flex flex-col md:flex-row relative min-h-screen">
        <div className="w-full md:w-1/2 relative flex justify-center items-center px-6 md:px-12 py-8 md:py-0">
          <div className="w-72 h-72 md:w-96 md:h-96 bg-black overflow-hidden rounded-full border-4 border-primary shadow-lg transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <img
              src={picture}
              alt="image"
              className="object-cover rounded-full py-6"
            />
          </div>
        </div>
        <div className="md:w-1/2 relative flex flex-col md:justify-center md:items-start items-center font-extrabold">
          <h1 className="text-3xl md:text-6xl">
            <span className="text-primary">Hi,</span>
          </h1>
          <h2 className="text-white text-2xl md:text-4xl py-4">
            This is
            <span className="text-primary"> Huzaifa</span>
          </h2>
          <div className="flex space-x-6">
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
          <p className="text-white font-semibold max-w-[600px] leading-relaxed md:text-start md:px-0 text-center px-6 py-4">
            I specialize in MERN stack web development, creating dynamic and
            interactive web applications using the powerful combination of
            MongoDB, Express.js, React.js, and Node.js. With a passion for clean
            code and user-friendly interfaces, I bring your ideas to life on the
            web.
          </p>
          <div className="py-6 ">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-primary bg-black border-primary border-2 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:shadow-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
