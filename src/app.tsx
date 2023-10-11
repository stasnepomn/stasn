import { FunctionComponent } from 'preact';
import { useSpring, animated } from 'react-spring';
import { toast } from 'react-toastify';
import Portrait from './assets/portrait.png';
import Blob from './assets/blob.webm';
import Link from './components/Link';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';

const ethAddress = 'stasn.eth';

export const App: FunctionComponent = () => {
  const [_, copy] = useCopyToClipboard();

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
          <h2 className="subtitle">Web3 engineer.</h2>
          <animated.div style={linkStyles} className="links">
            <div
              onClick={() => {
                copy(ethAddress);
                toast.success('Ethereum address successfully copied');
              }}
              className="cursor-pointer border-b-2 border-dashed border-sky-400  border-opacity-40 font-light text-sky-400 transition hover:border-green-500 hover:text-green-500 group-hover:border-green-300 group-hover:text-green-500"
            >
              {ethAddress}
            </div>
            <Link to="https://to.stasn.me/tg">telegram</Link>
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
