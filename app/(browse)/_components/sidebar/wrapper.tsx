'use client';
import { cn } from '@/lib/utils';
import { useStoreSelector } from '@/store/hook/useStoreSelector';
import { PropsWithChildren } from 'react';

/**
 * 제공된 children으로 Sidebar UI의 래퍼 컴포넌트를 렌더링하고 'collapsed' 변수의 상태에 따라 클래스를 적용합니다.
 *
 * @param {PropsWithChildren} children - 래퍼 컴포넌트 내에서 렌더링할 자식 요소
 * @return {JSX.Element} 렌더링된 래퍼 컴포넌트
 */
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
