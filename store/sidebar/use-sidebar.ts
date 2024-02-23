import { SliceStateCreator } from '../hook/useStoreSelector';

export interface SidebarStore {
  collapsed: boolean;
  onExpand: () => void;
  onCollapse: () => void;
}

export const createSidebarStore: SliceStateCreator<SidebarStore> = (set) => ({
  collapsed: false,
  onExpand: () => set(() => ({ collapsed: false })),
  onCollapse: () => set(() => ({ collapsed: true })),
});
