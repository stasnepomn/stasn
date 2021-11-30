import Block from './components/Block'
import Link from './components/Link'
import Subblock from './components/Subblock'
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
      <animated.div style={titleStyles} className='mt-10 bg-gradient-to-t from-black to-gray-800 break-words'>
        <h1 className='text-4xl md:text-5xl py-14 px-5 break-words text-white font-semibold text-center' style='-webkit-box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);-moz-box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);box-shadow: 0 20px 70px rgba(0, 0, 0, 0.55);'>
          Hello, I am <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600'>Stanislav Nepomniashchikh.</span>
        </h1>
      </animated.div>
      <div className='max-w-screen-lg mx-auto break-words p-5'>
        <animated.div style={contentStyles}>
          <main className='text-xl md:text-2xl text-gray-500'>
            <Block title='What do I do?'>
              I am an independent developer and curious person.
            </Block>

            <Block title='What do I use?'>
              I use Dart, TypeScript, Python, MongoDB or PostgreSQL for most applications in development. But, oddly enough, the stack can grow, you never know what you'll need.
            </Block>

            <Block title='What have I done?'>
              Co-founder & CTO of <Link to='https://bobbinet.com'>Bobbinet</Link> &mdash; health coaching platform with emotional AI and NFT metaverse integration.
              <Subblock>
                CTO of <Link to='https://htn.ai'>HTN Coach</Link> &mdash; hybrid coaching platform for patients with chronic medical conditions in cooperation with <Link to="https://omronhealthcare.com/">Omron Healthcare</Link>.
              </Subblock>
              <Subblock>
                Participated in the development of information systems and automation systems of <Link to='https://mir.ismu.baikal.ru'>Irkutsk State Medical University</Link>.
              </Subblock>
              <Subblock>
                Also worked with <Link to='https://engposts.com/'>EngPosts</Link>, <Link to='https://localizer.dev/'>Localizer</Link>, <Link to='https://fondu.io/'>Fondu</Link> and <Link to='https://todorant.com/'>Todorant</Link>. Made a <Link to='https://bot-finder.com/'>bot finder extension</Link> for VC, TJ and DTF.
              </Subblock>
            </Block>

            <Block title='Contact me.'>
              Via Telegram &mdash; <Link to='http://go.stasn.ru/tg'>@stasnepom</Link>, or send me email at <Link to='mailto:me@stasn.ru' dashed>me@stasn.ru</Link>.
            </Block>
          </main>
          <footer className='pt-5 text-lg text-gray-400 text-right'>~ love, SN.</footer>
        </animated.div>
      </div>
    </>
  )
}

export default App
