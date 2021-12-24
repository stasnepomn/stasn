import { FunctionalComponent } from 'preact';

const CardTitle: FunctionalComponent = ({ children }) => {
  return (
    <h2 className='text-xl md:text-2xl font-medium'>{children}</h2>
  )
}

export default CardTitle