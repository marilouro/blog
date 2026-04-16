import Link from 'next/link';
import clsx from 'clsx';

type PostHeadingProps = {
  children: React.ReactNode;
  url: string;
  as?: 'h1' | 'h2';
};

export function PostHeading({ children, url, as: Tag = 'h2' }: PostHeadingProps) {
  const HeadingClassesMap = {
    h1: 'text-2xl/tight sm:text-4xl font-extrabold',
    h2: 'text-2xl/tight font-bold',
  };

  const commonClasses = '';

  return (
    <Tag className={clsx(HeadingClassesMap[Tag], commonClasses)}>
      <Link className="transition hover:text-slate-600" href={url}>
        {children}
      </Link>
    </Tag>
  );
}
