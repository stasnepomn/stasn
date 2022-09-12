import { FunctionComponent } from 'preact';
import { useSpring, animated } from 'react-spring';
import Portrait from './assets/portrait.png';
import Blob from './assets/blob.webm';
import { projects } from './projects';
import Link from './components/Link';
import { Footer } from './components/Footer';
import { Card } from './components/Card';

export const App: FunctionComponent = () => {
  const contentStyles = useSpring({
    delay: 1500,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  const linkStyles = useSpring({
    delay: 1000,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  const titleStyles = useSpring({
    delay: 500,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  const blobStyles = useSpring({
    delay: 200,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  return (
    <>
      <animated.video
        src={Blob}
        style={blobStyles}
        autoPlay
        loop
        muted
        className="blob"
      />
<<<<<<< HEAD
      <main className="wrapper">
        <animated.section style={titleStyles} className="mt-10 px-5">
          <img src={Portrait} className="portrait" />
          <h1 className="title">
            Hello, I am{' '}
            <span className="title__gradient">Stanislav Nepomniashchikh.</span>
          </h1>
          <h2 className="subtitle">Developer.</h2>
          <animated.div style={linkStyles} className="links">
            <Link to="https://t.me/stasnblog">blog</Link>
            <Link to="https://t.me/stasnepom">telegram</Link>
            <Link to="https://github.com/stasnepomn">github</Link>
            <Link to="mailto:contact@stasn.me" dashed>
              contact@stasn.me
            </Link>
=======
      <div className="flex flex-col">
        <div className="relative flex flex-1 flex-col items-center justify-center py-10">
          <animated.div style={titleStyles} className="mt-10 px-5">
            <img
              src={Portrait}
              className="mx-auto mb-5 h-60 w-60 rounded-full"
            />
            <h1 className="break-words text-center text-3xl font-light text-white md:text-4xl">
              Hello, I am{' '}
              <span className="bg-gradient-to-r from-green-400 to-sky-400 bg-clip-text font-medium text-transparent">
                Stanislav Nepomniashchikh.
              </span>
            </h1>
            <div className="pt-3 text-center text-xl font-light text-white text-opacity-50 md:text-2xl">
              Developer and entrepreneur.
            </div>
            <animated.div style={linkStyles} className="mt-10 px-5">
              <div className="flex break-before-all flex-col items-center justify-center space-y-2 pt-10 text-xl font-light text-gray-700 md:flex-row md:space-x-5 md:space-y-0 md:text-2xl">
                <Link to="https://t.me/stasnblog">blog</Link>
                <Link to="https://t.me/stasnepom">telegram</Link>
                <Link to="https://github.com/stasnepomn">github</Link>
                <Link to="mailto:contact@stasn.me" dashed>
                  contact@stasn.me
                </Link>
              </div>
            </animated.div>
          </animated.div>
          <animated.div style={contentStyles} className="w-full">
            <div className="mt-14 w-full break-words">
              <main className="mx-auto grid max-w-screen-lg grid-cols-1 flex-col items-stretch justify-center gap-5 md:grid-cols-2">
                {projects.map((project) => (
                  <div className="flex w-full flex-row space-x-5 rounded-lg bg-slate-500 bg-opacity-20 p-5 backdrop-blur-md">
                    <div className="flex min-w-fit items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        width={70}
                        height={70}
                      />
                    </div>
                    <div className="flex flex-col space-y-1">
                      <div className="text-lg font-medium text-white opacity-80 md:text-xl">
                        {project.title}
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            className="ml-2 border-b-2 border-sky-400 border-opacity-40 font-normal text-sky-400 transition-all hover:opacity-60"
                          >
                            check out
                          </a>
                        )}
                        {project.posts &&
                          project.posts.map((post) => {
                            return (
                              <a
                                href={post.href}
                                target="_blank"
                                className="ml-2 border-b-2 border-sky-400 border-opacity-40 font-normal text-sky-400 transition-all hover:opacity-60"
                              >
                                {post.title}
                              </a>
                            );
                          })}

                        {project.subtitle && (
                          <span className="ml-2 font-light text-white opacity-50">
                            {project.subtitle}
                          </span>
                        )}
                      </div>
                      <div className="text-md text-white opacity-50 md:text-lg">
                        {project.comment}
                      </div>
                    </div>
                  </div>
                ))}
              </main>
            </div>
>>>>>>> e9c2860786f0366e515ead13689ac631bbd41590
          </animated.div>
        </animated.section>
        <animated.section style={contentStyles} className="projects">
          {projects.map((project) => (
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
              posts={project.posts}
              comment={project.comment}
            />
          ))}
        </animated.section>
      </main>
      <Footer />
    </>
  );
};
