import { useSpring, animated } from "react-spring";
import Card from "./components/Card";
import Link from "./components/Link";
import Htn from "./assets/htn.svg";
import Bobbinet from "./assets/bobbinet.svg";
import Habba from "./assets/habba.svg";
import Abit from "./assets/abit.svg";
import Allay from "./assets/allay.svg";
import Engposts from "./assets/engposts.svg";
import Orakle from "./assets/orakle.svg";
import Portrait from "./assets/portrait.jpg";

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
      comment: false,
    },
    {
      title: "Bobbinet",
      image: Bobbinet,
      link: "https://bobbinet.com",
      comment: false,
    },
    {
      title: "EngPosts",
      image: Engposts,
      link: "https://engposts.com",
      comment: false,
    },
    {
      title: "Abit",
      image: Abit,
      link: "#",
      comment: "pilot",
    },
    {
      title: "Orakle",
      image: Orakle,
      link: "#",
      comment: "soon",
    },
    {
      title: "Habba",
      image: Habba,
      link: "https://habba.app",
      comment: "soon",
    },
    {
      title: "Allay",
      image: Allay,
      link: "#",
      comment: "soon",
    },
  ];

  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 items-center flex-col justify-center py-10 relative">
        <animated.div style={titleStyles} className="mt-10 px-5">
          <img src={Portrait} className="w-60 h-60 mx-auto mb-5" />
          <h1 className="text-3xl md:text-4xl break-words font-light text-gray-700 text-center">
            Hello, I am{" "}
            <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-sky-600">
              Stanislav Nepomniashchikh.
            </span>
          </h1>
          <div className="text-xl md:text-2xl pt-3 font-light text-gray-400 text-center">
            Blockchain developer.
          </div>
          <div className="text-xl pt-10 md:text-2xl font-light text-gray-700 flex flex-col md:flex-row md:space-x-5 space-y-2 md:space-y-0 items-center justify-center break-before-all">
            <Link to="https://blog.stasn.me/">blog</Link>
            <Link to="https://t.me/stasnepom">telegram</Link>
            <Link to="https://github.com/stasnepomn">github</Link>
            <Link to="mailto:contact@stasn.ru" dashed>
              contact@stasn.ru
            </Link>
          </div>
        </animated.div>
        <animated.div style={contentStyles} className="w-full">
          <div className="break-words p-5 mt-14 w-full shadow-lg border-t border-gray-100 shadow-gray-100">
            <main class="flex flex-col md:flex-row items-center justify-center space-x-0 space-y-5 md:space-y-0 md:space-x-5">
              {projects.map((project) => (
                <Card>
                  {!project.comment ? (
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
                        {project.comment}
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
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default App;
