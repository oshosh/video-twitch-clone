import { Logo } from './logo';

export const Navbar = () => {
  return (
    <nav className='flexed top-0 w-full h-20 z-[49] bg-[#252731] px-2 lg:px-4 flex justify-between items-center shadow-sm'>
      <Logo />
    </nav>
  );
};
