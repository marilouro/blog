import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function PostFeatured() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className="grid-cols1 group mb-16 grid gap-8 sm:grid-cols-2">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          width: 1200,
          height: 720,
          src: '/images/blackhole.jpg',
          alt: 'Black Hole',
          priority: true,
        }}
      />
      <div className="flex flex-col gap-4 sm:justify-center">
        <time className="block text-sm/tight text-slate-600" dateTime="2025-05-21">
          30/03/2026 09:00
        </time>

        <PostHeading as="h1" url="#">
          aaaaaaaaaaaaaaaaa
        </PostHeading>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>
    </section>
  );
}
