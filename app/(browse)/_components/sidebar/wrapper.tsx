'use client';
import { cn } from '@/lib/utils';
import { useStoreSelector } from '@/store/hook/useStoreSelector';
import { PropsWithChildren } from 'react';
import { useIsClient } from 'usehooks-ts';
import { ToggleSkeleton } from './toggle';
import { RecommendedSkeleton } from './recommended';

/**
 * Sidebar, navbar의 Pre-Rendering를 담당합니다.
 * Hydration를 통하여 초기 client side에서 반응형 사이즈를 보고 Skeleton UI를 적용합니다.
 *
 * 제공된 children으로 Sidebar UI의 래퍼 컴포넌트를 렌더링하고 'collapsed' 변수의 상태에 따라 클래스를 적용합니다.
 *
 * @param {PropsWithChildren} children - 래퍼 컴포넌트 내에서 렌더링할 자식 요소
 * @return {JSX.Element} 렌더링된 래퍼 컴포넌트
 */
export const Wrapper = ({ children }: PropsWithChildren) => {
  const isClient = useIsClient();
  const { collapsed } = useStoreSelector(({ collapsed }) => ({ collapsed }));

  if (!isClient)
    // client Side 에서 동작 하는 경우 현재 반응형 사이즈를 보고서 반응형에 따른 css 및 스켈리톤을 적용한다
    return (
      <aside
        className={cn(
          'fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'
        )}
      >
        <ToggleSkeleton />
        <RecommendedSkeleton />
      </aside>
    );
  return (
    // server side 에서 동작하는 경우 client 상태관리를 통해서 동적인 css를 적용한다.
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
