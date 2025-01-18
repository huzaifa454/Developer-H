import { Link } from "react-scroll";

const Service = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center space-y-8 cursor-default">
      <div className="text-white text-3xl sm:text-4xl font-extrabold">
        <h1>
          <span className="text-3xl text-primary font-extrabold">My </span>
          <br />
          <h2 className="font-semibold">Services</h2>
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row sm:space-x-8 sm:mt-8 space-y-8 sm:space-y-0">
        <div className="flex flex-col w-[300px] h-[250px] border-2 border-primary rounded-lg p-6 text-center bg-black hover:bg-gray-800 transition-all duration-300">
          <h2 className="text-primary text-2xl mb-2 font-primary">
            UI/UX
            <h3 className="text-white text-lg mt-1">D e s i g n</h3>
          </h2>
          <p className="text-white text-base">
            UI/UX design for your web applications, ensuring an intuitive user
            experience and stunning visuals.
          </p>
        </div>

        <div className="flex flex-col w-[300px] h-[250px] border-2 border-primary rounded-lg p-6 text-center bg-black hover:bg-gray-800 transition-all duration-300">
          <h2 className="text-primary text-2xl mb-2 font-primary">
            F r o n t e n d
            <h3 className="text-white text-lg mt-1">D e v e l o p m e n t</h3>
          </h2>
          <p className="text-white text-base">
            React-based frontend development services, crafting responsive and
            interactive user interfaces for your projects.
          </p>
        </div>

        <div className="flex flex-col w-[300px] h-[250px] border-2 border-primary rounded-lg p-6 text-center bg-black hover:bg-gray-800 transition-all duration-300">
          <h2 className="text-primary text-2xl mb-2 font-primary">
            B a c k e n d
            <h3 className="text-white text-lg mt-1">D e v e l o p m e n t</h3>
          </h2>
          <p className="text-white text-base">
            Express-based backend development to power your applications with
            robust and scalable server-side functionality.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-primary bg-black text-white font-secondary font-bold py-3 px-6 border-2 border-primary rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View Projects
        </Link>
      </div>
    </div>
  );
};

export default Service;
