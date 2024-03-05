'use client';

import { useStoreSelector } from '@/store/hook/useStoreSelector';
import { User } from '@prisma/client';
import { useMemo } from 'react';

interface RecommendedProps {
  data: User[];
}

/**
 * getRecommended를 기반으로 user 목록을 나열 합니다.
 *
 * @param {RecommendedProps} data - 컴포넌트를 렌더링하기 위한 데이터
 * @return {JSX.Element} 렌더링된 추천 컴포넌트
 */
export const Recommended = ({ data }: RecommendedProps) => {
  const { collapsed } = useStoreSelector(({ collapsed }) => ({ collapsed }));

  const showLabel = useMemo(() => {
    return !collapsed && data.length > 0;
  }, [collapsed, data]);

  return (
    <div>
      {showLabel && (
        <div className='pl-6 mb-4'>
          <p className='text-sm text-muted-foreground'>Recommended</p>
        </div>
      )}
      <ul className='space-y-2 px-2'>
        {data.map((user) => {
          return <li key={user.id}>{user.username}</li>;
        })}
      </ul>
    </div>
  );
};
