import { PropsWithChildren, Suspense } from 'react';
import { Navbar } from './_components/navbar';
import { Sidebar, SidebarSkeleton } from './_components/sidebar';
import { Container } from './_components/container';

/**
 *  navbar, sidebar, home main 화면을 구성합니다.
 *
 */
const BrowseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20'>
        <Suspense fallback={<SidebarSkeleton />}>
          <Sidebar />
        </Suspense>

        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
