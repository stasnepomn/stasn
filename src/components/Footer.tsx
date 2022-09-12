import { useSpring, animated } from 'react-spring';

import { FunctionComponent } from 'preact';

export const Footer: FunctionComponent = () => {
  const footerStyles = useSpring({
    delay: 1800,
    to: [{ opacity: 1 }],
    from: { opacity: 0 },
  });

  return (
    <animated.footer style={footerStyles} className="footer">
      {new Date().getFullYear()} &copy; Stanislav Nepomniashchikh. Love.
    </animated.footer>
  );
};
