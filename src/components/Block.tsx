import { h, FunctionComponent } from "preact";

const Block: FunctionComponent = ({ children }) => {
  return (
    <div class='pt-5 md:pt-7'>
      {children}
    </div>
  );
};

export default Block