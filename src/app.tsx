import Block from './components/Block'
import Link from './components/Link'
import Subblock from './components/Subblock'

function App() {
  return (
    <div className='max-w-screen-lg mx-auto p-5'>
      <main className='text-2xl text-gray-500 p-10 bg-gray-50 rounded-lg border-2 border-gray-100'>
        <h1 className='text-4xl break-words text-gray-600'>
          Hello, I am <span className='font-medium bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-600'>Stanislav Nepomniashchikh</span>
        </h1>
        <Block title='Who do I do?'>
          I am an independent developer and project manager
        </Block>

        <Block title='What do I use?'>
          I use TypeScript, Python, MongoDB or PostgreSQL for most applications in development
          <Subblock>
            But, oddly enough, the stack can grow, you never know what you need
          </Subblock>
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

        <Block title='How to contact me?'>
          Feel free to contact me via Telegram — <Link to='https://t.me/stasnepom'>@stasnepom</Link>. Check me on <Link to='https://github.com/stasnepomn'>GitHub</Link>, or simply send me e-mail at <span className='px-2 py-1 bg-gray-500 font-light text-white rounded-lg text-xl'>me@stasn.ru</span>
        </Block>
      </main>
      <footer className='pt-5 text-sm text-gray-400'>~ love, SN</footer>
    </div>
  )
}

export default App