import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

/**
 * 
 * PrismaClient는 무겁고 상태를 가지고 있어 서버가 실행되는 동안 한 번만 인스턴스화하는 것이 좋습니다. 이를 통해 성능을 향상시키고 메모리 누수를 방지할 수 있습니다.

개발 환경에서는 파일이 수정될 때마다 서버가 다시 시작되기 때문에 PrismaClient를 새로 인스턴스화하는 것이 덜 부담스럽습니다. 따라서 개발 환경에서는 매 요청마다 인스턴스를 다시 만드는 것이 일반적입니다.

배포 환경에서는 코드가 한 번 빌드되고 서버가 계속 실행되므로, PrismaClient를 한 번만 인스턴스화하는 것이 효율적입니다.

따라서 이 코드는 개발 환경에서 PrismaClient를 매번 새로 만들지 않고, 배포 환경에서는 한 번만 만들어서 사용하는 패턴을 구현하고 있습니다.
 */

/**
 * 프리즈마 명령어
 * npx prisma init : 처음 초기 생성
 * npx prisma generate : db 새로 만들기
 * npx prisma db push : db 저장
 * npx prisma db pull : db 불러오기
 * npx prisma studio : db 스크립트 보기
 */

/**
 * planetscale를 활용해서 생성
 *
 * windows 경우
 * Set-ExecutionPolicy RemoteSigned -scope CurrentUser
 * Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')
 * scoop install curl
 *
 * scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
 * scoop install pscale
 *
 * pscale 테스트
 *
 * pscale auth login
 * pscale connect
 */

/**
 * Ngrok
 *
 * localhost -> Cloud Edge 연결 테스트
 *
 * local 실행 후 cloud Edge localhost 포트 맞춰서 실행
 */
