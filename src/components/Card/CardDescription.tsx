import { FunctionComponent } from 'preact';

const CardDescription: FunctionComponent = ({ children }) => {
  return (
    <p className='text-lg md:text-xl font-light pt-2'>{children}</p>
  )
}

export default CardDescription