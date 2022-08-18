import { h, FunctionComponent } from "preact";

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
        className="text-sky-600 font-medium border-b-2 border-sky-500 hover:text-green-600 hover:border-green-500 group-hover:text-green-500 group-hover:border-green-300 transition border-dashed"
      >
        {children}
      </a>
    );
  }
  return (
    <a
      href={to}
      target="_blank"
      className="text-sky-600 border-b-2 font-medium border-sky-500 hover:text-green-600 hover:border-green-500 group-hover:text-green-500 group-hover:border-green-300 transition"
    >
      {children}
    </a>
  );
};

export default Link;
