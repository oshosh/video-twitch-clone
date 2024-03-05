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

/**
 * 주어진 스토어에 개발 도구 및 immer 상태 관리를 적용하는 미들웨어 함수입니다.
 *
 * @param {SliceState} store - 미들웨어를 적용할 스토어
 * @return {StateDefinition} 미들웨어를 적용한 후의 상태 정의
 */
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
