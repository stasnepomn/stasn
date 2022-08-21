import { useSpring, animated } from 'react-spring';
import Card from './components/Card';
import Link from './components/Link';
import Htn from './assets/htn.svg';
import Bobbinet from './assets/bobbinet.svg';
import Habba from './assets/habba.svg';
import Abit from './assets/abit.svg';
import Allay from './assets/allay.svg';
import Engposts from './assets/engposts.svg';
import Orakl from './assets/orakl.svg';
import Portrait from './assets/portrait.png';
import Blob from './assets/blob.mp4';

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
      title: 'HTN Coach',
      image: Htn,
      link: 'https://htn.ai',
      comment: false,
    },
    {
      title: 'Bobbinet',
      image: Bobbinet,
      link: 'https://bobbinet.com',
      comment: false,
    },
    {
      title: 'EngPosts',
      image: Engposts,
      link: 'https://engposts.com',
      comment: false,
    },
    {
      title: 'Abit',
      image: Abit,
      link: '#',
      comment: 'pilot',
    },
    {
      title: 'Orakl',
      image: Orakl,
      link: 'https://orakllab.xyz/',
      comment: false,
    },
    {
      title: 'Habba',
      image: Habba,
      link: 'https://habba.app',
      comment: 'soon',
    },
    {
      title: 'Allay',
      image: Allay,
      link: '#',
      comment: 'soon',
    },
  ];

  return (
    <>
      <video
        src={Blob}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-screen w-screen object-cover"
      />
      <div className="flex h-screen flex-col">
        <div className="relative flex flex-1 flex-col items-center justify-center py-10">
          <animated.div style={titleStyles} className="mt-10 px-5">
            <img
              src={Portrait}
              className="mx-auto mb-5 h-60 w-60 rounded-full"
            />
            <h1 className="break-words text-center text-3xl font-light text-gray-700 md:text-4xl">
              Hello, I am{' '}
              <span className="bg-gradient-to-r from-green-600 to-sky-600 bg-clip-text font-medium text-transparent">
                Stanislav Nepomniashchikh.
              </span>
            </h1>
            <div className="pt-3 text-center text-xl font-light text-black text-opacity-40 md:text-2xl">
              Developer.
            </div>
            <div className="flex break-before-all flex-col items-center justify-center space-y-2 pt-10 text-xl font-light text-gray-700 md:flex-row md:space-x-5 md:space-y-0 md:text-2xl">
              <Link to="https://blog.stasn.me/">blog</Link>
              <Link to="https://t.me/stasnepom">telegram</Link>
              <Link to="https://github.com/stasnepomn">github</Link>
              <Link to="mailto:contact@stasn.ru" dashed>
                contact@stasn.ru
              </Link>
            </div>
          </animated.div>
          <animated.div style={contentStyles} className="w-full">
            <div className="mt-14 w-full break-words bg-white bg-opacity-20 p-5">
              <main className="flex flex-col items-center justify-center space-x-0 space-y-5 md:flex-row md:space-y-0 md:space-x-5">
                {projects.map((project) => (
                  <Card>
                    {!project.comment ? (
                      <a href={project.link} target="_blank">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-24 w-24"
                        />
                      </a>
                    ) : (
                      <>
                        <span className="absolute top-0 right-0 z-10 rounded-full bg-red-700 py-1 px-2 text-sm font-medium text-white">
                          {project.comment}
                        </span>
                        <img
                          src={project.image}
                          alt={project.title}
                          className="h-24 w-24 grayscale"
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
    </>
  );
}

export default App;
