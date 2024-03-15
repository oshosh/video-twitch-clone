'use client';

import { cn } from '@/lib/utils';
import { useStoreSelector } from '@/store/hook/useStoreSelector';

import { useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

interface ContainerProps {
  children: React.ReactNode;
}

export function Container({ children }: ContainerProps) {
  const { collapsed, onExpand, onCollapse } = useStoreSelector(
    ({ collapsed, onCollapse, onExpand }) => ({ collapsed, onExpand, onCollapse })
  );

  const matches = useMediaQuery('(max-width: 1024px)');
  useEffect(() => {
    if (matches) {
      onCollapse();
    } else {
      onExpand();
    }
  }, [matches, onCollapse, onExpand]);

  return (
    <div className={cn('flex-1', collapsed ? 'ml-[70px]' : 'ml-[70x] lg:ml-60')}>{children}</div>
  );
}
