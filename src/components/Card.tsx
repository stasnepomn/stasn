import { FunctionComponent } from 'preact';
import Link from './Link';

interface CardProps {
  title: string;
  subtitle?: string;
  link?: string;
  posts?: any[];
  comment: string;
  stack?: string;
}

export const Card: FunctionComponent<CardProps> = ({
  comment,
  title,
  link,
  posts,
  subtitle,
}) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__header">
          <span className="card__title">{title}</span>
          {link && <Link to={link}>check out</Link>}
          {posts &&
            posts.map((post) => {
              return <Link to={post.href}>{post.title}</Link>;
            })}

          {subtitle && <span className="card__subtitle">{subtitle}</span>}
        </div>
        <div className="card__comment">{comment}</div>
      </div>
    </div>
  );
};
