import { h, FunctionComponent } from "preact";

const Subblock: FunctionComponent = ({ children }) => {
  return (
    <p className='pt-3'>{children}</p>
  );
};

export default Subblock