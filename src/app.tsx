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
          </animated.div>
        </animated.section>
        <animated.div style={contentStyles} className="section-text">
          List of my projects{' '}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="inline-block h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
            />
          </svg>
        </animated.div>
        <animated.section style={contentStyles} className="projects">
          {projects.map((project) => (
            <Card
              image={project.image}
              title={project.title}
              subtitle={project.subtitle}
              link={project.link}
              posts={project.posts}
              comment={project.comment}
              stack={project.stack}
            />
          ))}
        </animated.section>
      </main>
      <Footer />
    </>
  );
};
