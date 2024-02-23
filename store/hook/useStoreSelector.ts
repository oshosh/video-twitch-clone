import { StateCreator, create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';
import { SidebarStore } from '../sidebar/use-sidebar';
import { createSidebarStore } from './../sidebar/use-sidebar';

/**
 *  Store의 모든 Type 정의
 * */
export type ZustandState = SidebarStore;

/**
 * State의 Create Type 정의
 */
export type SliceStateCreator<T> = StateCreator<
  ZustandState,
  [['zustand/devtools', never], ['zustand/immer', never]],
  [],
  T
>;

type StateDefinition = StateCreator<ZustandState>;

type SliceState = SliceStateCreator<ZustandState>;

const middleware = (store: SliceState) =>
  (process.env.NODE_ENV === 'development'
    ? devtools(immer(store))
    : immer(store)) as StateDefinition;

/**
 * Custom Zustand Selector
 */
export const useStoreSelector = create<ZustandState>()(
  middleware((...a) => ({
    ...createSidebarStore(...a),
  }))
);
