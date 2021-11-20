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
    <div className='max-w-screen-lg mx-auto p-5 pt-10'>
      <animated.div style={titleStyles}>
        <h1 className='text-5xl py-10 break-words text-gray-800 font-semibold text-center'>
          Hello, I am <span className='font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600'>Stanislav Nepomniashchikh</span>
        </h1>
      </animated.div>
      <animated.div style={contentStyles}>
        <main className='text-2xl text-gray-500'>
          <Block title='Who do I do?'>
            I am an independent developer and project manager
          </Block>

          <Block title='What do I use?'>
            I use TypeScript, Python, MongoDB or PostgreSQL for most applications in development.But, oddly enough, the stack can grow, you never know what you'll need
          </Block>

          <Block title='What have I done?'>
            Participated in the development of information systems and automation systems of <Link to='https://mir.ismu.baikal.ru'>Irkutsk State Medical University</Link> with PHP, Python, NodeJS, RabbitMQ and MySQL
            <Subblock>
              Currently I've been working as Tech Lead in <Link to='https://htn.ai'>HTN Coach</Link> (SensoAI Systems Inc.), also worked with <Link to='https://engposts.com/'>EngPosts</Link>, <Link to='https://localizer.dev/'>Localizer</Link>, <Link to='https://fondu.io/'>Fondu</Link> and <Link to='https://todorant.com/'>Todorant</Link>
            </Subblock>
            <Subblock>
              Made a <Link to='https://bot-finder.com/'>bot finder extension</Link> for VC, TJ and DTF
            </Subblock>
          </Block>

          <Block title='Contact me'>
            Feel free to contact me via Telegram — <Link to='https://t.me/stasnepom'>@stasnepom</Link>.Check me on <Link to='https://github.com/stasnepomn'>GitHub</Link>, or simply send me e-mail at <span className='px-3 pb-1 bg-gray-500 font-light text-white rounded-lg text-xl'>me @stasn.ru</span>
          </Block>
        </main>
        <footer className='pt-5 text-lg text-gray-400 text-right'>~ love, SN</footer>
      </animated.div>
    </div >
  )
}

export default App