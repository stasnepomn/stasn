import { useSpring, animated } from 'react-spring'
import Card from './components/Card/Card'
import CardDescription from './components/Card/CardDescription'
import CardTitle from './components/Card/CardTitle'
import Link from './components/Link'
import Smile from './assets/smile.svg'

function App() {
  const contentStyles = useSpring({
    delay: 1500,
    to: [
      { opacity: 1 },
    ],
    from: { opacity: 0 },
  })

  const titleStyles = useSpring({
    delay: 500,
    to: [
      { opacity: 1 },
    ],
    from: { opacity: 0 },
  })

  return (
    <>
      <animated.div style={titleStyles} className='mt-10 bg-white break-words border shadow-lg shadow-gray-500/10 border-gray-200 border-l-0 border-r-0'>
        <h1 className='text-3xl md:text-4xl py-14 px-5 break-words font-light text-gray-700 text-center'>
          Hello, I am <span className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-sky-600'>Stanislav Nepomniashchikh.</span>
        </h1>
      </animated.div>
      <div className='max-w-screen-lg mx-auto break-words p-5 pt-5 md:pt-10'>
        <animated.div style={contentStyles}>
          <main class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 items-start text-gray-700">
            <Card>
              <CardTitle><Link to='https://htn.ai'>HTN Coach</Link></CardTitle>
              <CardDescription>Hybrid coaching platform and medical data analytics company for patients with chronic medical conditions in partnership with <Link to='https://omronhealthcare.com/'>Omron Healthcare</Link>.</CardDescription>
            </Card>
            <Card>
              <CardTitle><Link to='https://bobbinet.com'>Bobbinet</Link></CardTitle>
              <CardDescription>Revolutionary Health 4.0 platform. Provides access to a decentralized, anonymous health pass to everyone around the globe who needs healthcare.</CardDescription>
            </Card>
          </main>
          <img src={Smile} className='mx-auto pt-10' />
          <div className='text-xl md:text-2xl font-light text-center pb-10 text-gray-700'>Contact me <Link to='https://t.me/stasnepom'>@stasnepom</Link> or <Link to='mailto:me@stasn.ru' dashed>me@stasn.ru</Link></div>
        </animated.div>
      </div>
    </>
  )
}

export default App
