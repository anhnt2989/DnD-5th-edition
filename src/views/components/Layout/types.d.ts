declare module "AppModels" {
  import type { MenuProps } from 'antd/lib/menu';

  export type TMainLayoutProps = {
    children?: React.ReactNode
  }

  export type TMenuItem = Required<{
    key: string
    icon: React.ReactNode
    label: React.ReactNode
    hasChildren: boolean
    items: Array<Omit<TMenuItem, 'items', 'hasChildren'>> | null
  }>
}