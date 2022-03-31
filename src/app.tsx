import { useSpring, animated } from "react-spring";
import Card from "./components/Card/Card";
import CardDescription from "./components/Card/CardDescription";
import CardTitle from "./components/Card/CardTitle";
import Link from "./components/Link";
import Apple from "./assets/apple.svg";

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

  return (
    <>
      <animated.div
        style={titleStyles}
        className="mt-10 py-14 px-5"
      >
        <h1 className="text-3xl md:text-4xl break-words font-light text-gray-700 text-center">
          Hello, I am{" "}
          <span className="font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-sky-600">
            Stanislav Nepomniashchikh.
          </span>
        </h1>
        <div className="text-xl pt-4 first-letter:md:text-2xl font-light text-gray-700 flex space-x-5 items-center justify-center">
          <Link to="https://t.me/stasnepom">@stasnepom</Link>
          <Link to="mailto:me@stasn.ru" dashed>
            me@stasn.ru
          </Link>
        </div>
      </animated.div>
      <div className="max-w-screen-lg mx-auto break-words p-5 pt-5 md:pt-10">
      <div className='bg-gray-800 p-4 select-none text-white rounded-lg mb-10 text-center text-lg font-medium'>The war is not meant to be won, it is meant to be continuous.</div>
        <animated.div style={contentStyles}>
          <main class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start text-gray-700">
            <Card>
              <CardTitle>
                <Link to="https://htn.ai">HTN Coach</Link>
              </CardTitle>
              <CardDescription>
                Hybrid coaching platform and medical data analytics company for
                patients with chronic medical conditions in partnership with{" "}
                <Link to="https://omronhealthcare.com/">Omron Healthcare</Link>.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>
                <Link to="https://bobbinet.com">Bobbinet</Link>
              </CardTitle>
              <CardDescription>
                Revolutionary Health 4.0 platform. Provides access to a
                decentralized, anonymous health pass to everyone around the
                globe who needs healthcare.
              </CardDescription>
            </Card>
            <Card>
              <CardTitle>Habba &mdash; soon</CardTitle>
              <CardDescription>
                Minimalistic service that provides you the best way to track
                your goals and habits. Simple and smart.
              </CardDescription>
            </Card>
          </main>
          <img src={Apple} className="mx-auto h-52 py-20 mb-10" />
        </animated.div>
      </div>
    </>
  );
}

export default App;
