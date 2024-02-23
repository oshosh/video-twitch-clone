import { PropsWithChildren, Suspense } from 'react';
import { Navbar } from './_components/navbar';
import { Sidebar } from './_components/sidebar';

const BrowseLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className='flex h-full pt-20'>
        <Suspense fallback={'스켈리톤'}>
          <Sidebar />
        </Suspense>
        <div>{children}</div>
      </div>
    </>
  );
};

export default BrowseLayout;
