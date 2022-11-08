declare module 'AppModels' {
  import { TSpellDetail } from 'AppModels'

  export type TSpellItemProps = Omit<TSpellDetail, '_id', 'index', 'url'>
}