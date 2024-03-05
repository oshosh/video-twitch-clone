import { PropsWithChildren, Suspense } from 'react';
import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';
import { Container } from './_components/container';

const BrowseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full'>
        <Suspense fallback={'스켈리톤'}>
          <Sidebar />
        </Suspense>
        <Container>{children}</Container>
      </div>
    </>
  );
};

export default BrowseLayout;
