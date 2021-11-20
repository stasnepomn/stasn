import { h, FunctionComponent } from "preact";

type BlockProps = {
  title: string
}

const Block: FunctionComponent<BlockProps> = ({ title, children }) => {
  return (
    <div class='pt-7'>
      <div className='font-medium text-blue-600 rounded-lg'>{title}</div>
      <p className='pt-3'>{children}</p>
    </div>
  );
};

export default Block