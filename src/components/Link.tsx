import { h, FunctionComponent } from 'preact';

type LinkProps = {
  to: string;
  dashed?: boolean;
};

const Link: FunctionComponent<LinkProps> = ({
  to,
  dashed = false,
  children,
}) => {
  if (dashed) {
    return (
      <a
        href={to}
        className="border-b-2 border-dashed border-sky-500 font-medium text-sky-600 transition hover:border-green-500 hover:text-green-600 group-hover:border-green-300 group-hover:text-green-500"
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={to}
      target="_blank"
      className="border-b-2 border-sky-500 font-medium text-sky-600 transition hover:border-green-500 hover:text-green-600 group-hover:border-green-300 group-hover:text-green-500"
    >
      {children}
    </a>
  );
};

export default Link;
