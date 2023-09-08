export interface IAppConfig {
  layout: TLayout;
  enableDock: boolean;
  collapsed: boolean;
}

export type TLayout = 'VERTICAL' | 'HORIZONTAL';
