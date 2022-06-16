import { FunctionalComponent } from "preact";

const Card: FunctionalComponent = ({ children }) => {
  return (
    <div className="cursor-default group hover:scale-110 transition relative">
      {children}
    </div>
  );
};

export default Card;
