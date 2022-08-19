import { FunctionalComponent } from 'preact';

const Card: FunctionalComponent = ({ children }) => {
  return (
    <div className="group relative cursor-default transition hover:scale-110">
      {children}
    </div>
  );
};

export default Card;
