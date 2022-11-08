declare module 'AppModels' {
  import { TSpellListRecord } from "AppModels"

  export type TSpellsPageProps = {
    
  }

  export type TSpellColumn = TSpellListRecord & {
    key?: React.Key
  }
}