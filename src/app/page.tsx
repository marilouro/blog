import { Header } from '@/components/Header';
import { Suspense } from 'react';
import { SpinLoader } from '@/components/SpinLoader';
import { PostsList } from '@/components/PostsList';
import { Container } from '@/components/Container';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';
import { PostFeatured } from '@/components/PostFeatured';

export default async function HomePage() {
  return (
    <Container>
      <Header />

      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />
      </Suspense>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <footer>
        <p className="py-8 text-center text-6xl font-bold">footer</p>
      </footer>
    </Container>
  );
}
