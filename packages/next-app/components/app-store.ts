import create from 'zustand';
import { Friends } from './apps/friends';
import { Games } from './apps/games';

export const useApps = create<{
  apps: Record<string, () => React.ReactElement>;
  currentApp: string | null;
  setCurrentApp(app: string | null): void;
}>(set => ({
  apps: {
    friends: Friends,
    games: Games,
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
