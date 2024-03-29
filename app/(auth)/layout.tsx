import { PropsWithChildren } from 'react';
import { Logo } from './_components/logo';

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='h-full flex flex-col items-center justify-center space-x-6'>
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;
