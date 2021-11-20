import { h, FunctionComponent } from "preact";

type BlockProps = {
  title: string
}

const Block: FunctionComponent<BlockProps> = ({ title, children }) => {
  return (
    <div class='pt-7'>
      <div className='font-semibold text-gray-800 text-4xl rounded-lg'>{title}</div>
      <p className='pt-2'>{children}</p>
    </div>
  );
};

export default Block