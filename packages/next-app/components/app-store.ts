import create from 'zustand';
import { Friends } from './apps/friends';
import { Games } from './apps/games';
import { Teleport } from './apps/teleport';

export const useApps = create<{
  apps: Record<string, () => React.ReactElement>;
  currentApp: string | null;
  setCurrentApp(app: string | null): void;
}>(set => ({
  apps: {
    friends: Friends,
    // games: Games,
    teleport: Teleport,
  },
  currentApp: null as string | null,
  setCurrentApp(app) {
    console.log('setting app to::', app);
    set(state => ({ ...state, currentApp: app }));
  },
}));

export const useVisible = create<{
  visible: 'glasses' | 'apps';
  setVisible(visible: 'glasses' | 'apps'): void;
}>(set => ({
  visible: 'glasses',
  setVisible(visible) {
    set(state => ({ ...state, visible }));
  },
}));

export const useCurrentPlace = create<{
  modelId: string;
  setModelId(modelId: string): void;
}>(set => ({
  modelId: '7c61edc428a24b188633e526616a729c',
  setModelId(modelId) {
    set(state => ({ ...state, modelId }));
  },
}));
