'use client';
import { cn } from '@/lib/utils';
import { useStoreSelector } from '@/store/hook/useStoreSelector';
import { PropsWithChildren } from 'react';

export const Wrapper = ({ children }: PropsWithChildren) => {
  const { collapsed } = useStoreSelector(({ collapsed }) => ({ collapsed }));

  return (
    <aside
      className={cn(
        'fixed left-0 flex flex-col w-60 h-full bg-background border-r border-[#2D2E35] z-50',
        collapsed && 'w-[70px]'
      )}
    >
      {children}
    </aside>
  );
};
