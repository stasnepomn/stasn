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
          <h2 className="subtitle">Software engineer.</h2>
          <animated.div style={linkStyles} className="links">
            <Link to="https://t.me/endiffq">blog</Link>
            <Link to="https://t.me/st_nep">telegram</Link>
            <Link to="https://github.com/stasnepomn">github</Link>
            <Link to="mailto:contact@stasn.me" dashed>
              contact@stasn.me
            </Link>
          </animated.div>
        </animated.section>
      </main>
    </>
  );
};
