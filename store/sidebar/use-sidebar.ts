import { SliceStateCreator } from '../hook/useStoreSelector';

export interface SidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

/**
 * collapsed가 false로 설정된 초기 상태의 사이드바 스토어를 생성하고, 사이드바를 확장하거나 축소하는 기능을 제공합니다.
 *
 * @param {Function} set - 상태 관리 라이브러리에서 제공된 함수로 스토어 상태를 업데이트하는데 사용됩니다
 * @return {SidebarStore} 생성된 사이드바 스토어
 */
export const createSidebarStore: SliceStateCreator<SidebarStore> = (set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
});
