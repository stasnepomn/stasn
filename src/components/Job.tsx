import { h, FunctionComponent } from "preact";

const Job: FunctionComponent = ({ children }) => {
  return (
    <div class='border-l-4 my-3 py-3 pl-5'>
      {children}
    </div>
  );
};

export default Job