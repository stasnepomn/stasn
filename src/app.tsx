import Block from './components/Block'
import Link from './components/Link'
import Subblock from './components/Subblock'
import Job from './components/Job'
import { useSpring, animated } from 'react-spring'

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
      <animated.div style={titleStyles} className='mt-10 bg-white break-words border border-gray-100 border-l-0 border-r-0'>
        <h1 className='text-4xl md:text-5xl py-14 px-5 break-words text-gray-700 font-light text-center' style='-webkit-box-shadow: 0 20px 70px rgba(0, 0, 0, 0.10);-moz-box-shadow: 0 20px 70px rgba(0, 0, 0, 0.10);box-shadow: 0 20px 70px rgba(0, 0, 0, 0.10);'>
          Hello, I am <span className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600'>Stanislav Nepomniashchikh.</span>
        </h1>
      </animated.div>
      <div className='max-w-screen-lg mx-auto break-words p-5 pt-5 md:pt-10'>
        <animated.div style={contentStyles}>
          <main className='text-2xl md:text-3xl font-light text-gray-700 leading-relaxed'>
            <Block>
              Developer and curious person.
            </Block>

            <Block>
              <Job>
                Co-founder & CTO of <Link to='https://bobbinet.com'>Bobbinet</Link> &mdash; health coaching platform with emotional AI and NFT metaverse integration.
              </Job>
              <Job>
                CTO of <Link to='https://htn.ai'>HTN Coach</Link> &mdash; hybrid coaching platform for patients with chronic medical conditions in cooperation with <Link to="https://omronhealthcare.com/">Omron Healthcare</Link>.
              </Job>
              <Subblock>
                Participated in the development of information systems and automation systems of <Link to='https://mir.ismu.baikal.ru'>Irkutsk State Medical University</Link>.
              </Subblock>
              <Subblock>
                Also worked with <Link to='https://engposts.com/'>EngPosts</Link>, <Link to='https://localizer.dev/'>Localizer</Link>, <Link to='https://fondu.io/'>Fondu</Link>, and <Link to='https://todorant.com/'>Todorant</Link>. Made a <Link to='https://bot-finder.com/'>bot finder extension</Link> for VC, TJ, and DTF.
              </Subblock>
            </Block>

            <Block>
              Contact me via Telegram &mdash; <Link to='http://go.stasn.ru/tg'>@stasnepom</Link>, or send me an email at <Link to='mailto:me@stasn.ru' dashed>me@stasn.ru</Link>.
            </Block>
          </main>
          <footer className='pt-5 text-lg text-gray-400 text-right'>~ love, SN.</footer>
        </animated.div>
      </div>
    </>
  )
}

export default App
