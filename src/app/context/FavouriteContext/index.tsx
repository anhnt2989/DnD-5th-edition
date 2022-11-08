import React from 'react'

import { TSpellListRecord } from 'AppModels'

const FavouriteContext = React.createContext<{
  list: Array<TSpellListRecord>
  addNew: (spell: TSpellListRecord) => void
  remove: (spell: TSpellListRecord) => void
} | null>(null)

export default FavouriteContext