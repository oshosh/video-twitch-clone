'use client';
import { cn } from '@/lib/utils';
import { useStoreSelector } from '@/store/hook/useStoreSelector';
import { PropsWithChildren, useEffect } from 'react';
import { useMediaQuery } from 'usehooks-ts';

/**
 * 자식 요소를 감싸는 축소 및 확장 기능이 있는 컨테이너 컴포넌트입니다.
 *
 * @param {PropsWithChildren} children - 감쌀 자식 요소
 * @return {JSX.Element} 축소 및 확장된 스타일이 적용된 컨테이너 컴포넌트
 */
export const Container = ({ children }: PropsWithChildren) => {
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
    <div className={cn('flex-1', collapsed ? 'ml-[70px]' : 'ml-[70px] lg:ml-60')}>{children}</div>
  );
};
