declare module 'AppModels' {
  export type TSpellListRecord = {
    index: string
    name: string
    url: string
  }

  export type TSpellListResponse = {
    count: number
    results: Array<TSpellListRecord>
  }
}