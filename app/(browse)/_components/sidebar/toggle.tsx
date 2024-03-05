'use client';
import { Hint } from '@/components/hint';
import { Button } from '@/components/ui/button';
import { useStoreSelector } from '@/store/hook/useStoreSelector';
import { ArrowLeftFromLine, ArrowRightFromLine } from 'lucide-react';

/**
 * 'collapsed' 상태에 기반하여 컴포넌트를 렌더링하는 함수,
 * 'collapsed' 값에 따라 Sidebar UI 요소의 상태 변화를 보여줍니다.
 *
 * @return {JSX.Element} 렌더링된 JSX 요소
 */
export const Toggle = () => {
  const { collapsed } = useStoreSelector(({ collapsed }) => ({ collapsed }));
  const { onExpand, onCollapse } = useStoreSelector();

  const label = collapsed ? '확장' : '축소';

  return (
    <>
      {collapsed && (
        <div className='hidden lg:flex w-full items-center justify-center pt-4 mb-4'>
          <Hint asChild label={label} side='right'>
            <Button onClick={onExpand} variant='ghost' className='h-auto p-2'>
              <ArrowRightFromLine className='h-4 w-4' />
            </Button>
          </Hint>
        </div>
      )}
      {!collapsed && (
        <div className='p-3 pl-6 mb-2 flex items-center w-full'>
          <p className='font-semibold text-primary'>For you</p>

          {/* flex between 보다 ml-auto로 주고 collapsed 시 false으로 또는 true로 구현*/}
          <Hint asChild label={label} side='right'>
            <Button className='h-auto p-2 ml-auto' variant='ghost' onClick={onCollapse}>
              <ArrowLeftFromLine className='h-4 w-4' />
            </Button>
          </Hint>
        </div>
      )}
    </>
  );
};
