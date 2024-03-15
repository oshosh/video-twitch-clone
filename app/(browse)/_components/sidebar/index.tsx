import { Wrapper } from './wrapper';
import { Toggle, ToggleSkeleton } from './toggle';
import { Recommended, RecommendedSkeleton } from './recommended';
import { getRecommended } from '@/lib/recommended-service';

/**
 * 데이터를 가져와서 표시하는 비동기 함수를 렌더링하는 함수입니다.
 *
 * @return {JSX.Element} 렌더링된 사이드바 컴포넌트입니다.
 */
export const Sidebar = async () => {
  const recommended = await getRecommended();

  return (
    <Wrapper>
      <Toggle />
      <div className='space-y-4 pt-4 lg:pt-0'>
        <Recommended data={recommended} />
      </div>
    </Wrapper>
  );
};

export function SidebarSkeleton() {
  return (
    // 기존 Sidebar 위에  엎어쳐 있는 화면임
    <aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
      <ToggleSkeleton />
      <RecommendedSkeleton />
    </aside>
  );
}
