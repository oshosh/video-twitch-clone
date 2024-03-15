import { db } from './db';

/**
 * 데이터베이스에서 추천 사용자를 비동기적으로 검색합니다.
 *
 * @return {User[]} 추천 사용자의 배열
 */
export const getRecommended = async () => {
  // await new Promise((resolve) => setTimeout(resolve, 500));

  const users = await db.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });

  return users;
};
