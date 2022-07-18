import { useSpring, animated } from "react-spring";
import Card from "./components/Card";
import Link from "./components/Link";
import Htn from "./assets/htn.svg";
import Bobbinet from "./assets/bobbinet.svg";
import Habba from "./assets/habba.svg";
import Abit from "./assets/abit.svg";

function App() {
  const contentStyles = useSpring({
    delay: 1500,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  const titleStyles = useSpring({
    delay: 500,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  const projects = [
    {
      title: "HTN Coach",
      image: Htn,
      link: "https://htn.ai",
      soon: false,
    },
    {
      title: "Bobbinet",
      image: Bobbinet,
      link: "https://bobbinet.com",
      soon: false,
    },
    {
      title: "Habba",
      image: Habba,
      link: "https://habba.app",
      soon: true,
    },
    {
      title: "Abit",
      image: Abit,
      link: "#",
      soon: true,
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="bg-gradient-to-r from-yellow-400 to-sky-600 p-4 select-none text-white text-center text-sm md:text-lg font-medium">
        Stop.
      </div>
      <div className="flex flex-1 items-center flex-col justify-center py-10">
        <animated.div style={titleStyles} className="mt-10 px-5">
          <h1 className="text-3xl md:text-4xl break-words font-light text-gray-700 text-center">
            Hello, I am{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-sky-600">
              Stanislav Nepomniashchikh.
            </span>
          </h1>
          <div className="text-xl md:text-2xl pt-3 font-light text-gray-400 text-center">
            Data scientist and backend developer.
          </div>
          <div className="text-xl pt-10 md:text-2xl font-light text-gray-700 flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 items-center justify-center break-before-all">
            <Link to="https://t.me/stasnepom">telegram</Link>
            <Link to="https://github.com/stasnepomn">github</Link>
            <Link to="mailto:contact@stasn.ru" dashed>
              contact@stasn.ru
            </Link>
          </div>
        </animated.div>
        <div className="max-w-screen-lg mx-auto break-words p-5 pt-14">
          <animated.div style={contentStyles}>
            <main class="flex items-center justify-center space-x-5">
              {projects.map((project) => (
                <Card>
                  {!project.soon ? (
                    <a href={project.link} target="_blank">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-24 h-24"
                      />
                    </a>
                  ) : (
                    <>
                      <span className="bg-red-700 text-sm text-white font-medium py-1 px-2 rounded-full absolute z-10 top-0 right-0">
                        soon
                      </span>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-24 h-24 grayscale"
                      />
                    </>
                  )}
                </Card>
              ))}
            </main>
          </animated.div>
        </div>
      </div>
    </div>
  );
}

export default App;
