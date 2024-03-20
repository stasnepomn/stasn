import { FunctionComponent } from 'preact';
import { useSpring, animated } from 'react-spring';
import { toast } from 'react-toastify';
import Portrait from './assets/avatar.webp';
import Link from './components/Link';
import { useCopyToClipboard } from './hooks/useCopyToClipboard';

const emailAddress = 'contact@stasn.me';

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

  return (
    <>
      <main className="wrapper">
        <animated.section style={titleStyles} className="mt-10 px-5">
          <img src={Portrait} className="portrait" />
          <h1 className="title">
            <span className="title__gradient">Stanislav Nepomniashchikh</span>
          </h1>
          <h2 className="subtitle">Tech entrepreneur</h2>
          <animated.div style={linkStyles} className="links">
            <Link to="https://to.stasn.me/tg">telegram</Link>
            <div
              onClick={() => {
                copy(emailAddress);
                toast.success('Copied', {
                  className: 'font-sans',
                });
              }}
              className="cursor-pointer border-b-2 border-dashed border-sky-400  border-opacity-40 font-light text-sky-400 transition hover:border-green-500 hover:text-green-500 group-hover:border-green-300 group-hover:text-green-500"
            >
              {emailAddress}
            </div>
          </animated.div>
        </animated.section>
      </main>
    </>
  );
};
