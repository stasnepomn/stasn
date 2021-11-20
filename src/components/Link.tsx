import { h, FunctionComponent } from "preact";

type LinkProps = {
  to: string
}

const Link: FunctionComponent<LinkProps> = ({ to, children }) => {
  return (
    <a href={to} target='_blank' className='text-blue-600 border-b-2 border-blue-300 hover:text-green-500 hover:border-green-300 transition'>{children}</a>
  );
};

export default Link