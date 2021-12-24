import { FunctionalComponent } from 'preact'

const Card: FunctionalComponent = ({ children }) => {
  return (
    <div className='cursor-default group hover:scale-110 transition shadow-lg shadow-gray-500/10 border border-gray-200 bg-white rounded-lg p-5'>
      {children}
    </div>
  )
}

export default Card