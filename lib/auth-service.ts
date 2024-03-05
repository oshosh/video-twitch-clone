import { currentUser } from '@clerk/nextjs';
import { db } from './db';

/**
 * 데이터베이스에서 현재 사용자를 검색합니다.
 *
 * @return {Promise<User>} 현재 사용자를 나타내는 사용자 객체.
 */
export const getSelf = async () => {
  try {
    const self = await currentUser();

    if (!self || !self.username) {
      throw new Error('Unauthorized');
    }

    // Find the user in the database
    const user = db.user.findUnique({
      where: { externalUserId: self.id },
    });

    if (!user) {
      throw new Error('Not found');
    }

    return user;
  } catch (error) {
    console.error('Error in getSelf:', error);
    throw error;
  }
};
