import React from 'react'
import { toast } from 'react-toastify'

import { TFavouriteContextProviderProps, TSpellListRecord } from 'AppModels'

import FavouriteContext from '.'

const Provider: React.FC<TFavouriteContextProviderProps> = (props): React.ReactElement => {

  const add2Favourite = (spell: TSpellListRecord) => {
    const newList = state.list
    const filtered = newList.filter(s => {
      return s.index === spell.index;
    })
    if (filtered.length > 0) {
      toast.error('Spell already existed in favourite!')
      return
    } else {
      newList.push(spell)
      toast.success('Added to favourite!')
    }
    setState((prev) => {
      return {
        ...prev,
        list: newList
      }
    })
  }

  const removeFromFavourite = (spell: TSpellListRecord) => {
    const list = state.list
    const index = list.findIndex(el => el.index === spell.index)
    list.splice(index, 1)
    setState((prev) => {
      return {
        ...prev,
        list
      }
    })
    toast.success('Spell removed from favourite!')
  }

  const initialState: {
    list: Array<TSpellListRecord>
    addNew: (spell: TSpellListRecord) => void
    remove: (spell: TSpellListRecord) => void
  } = {
    list: [],
    addNew: add2Favourite,
    remove: removeFromFavourite
  }
  const [state, setState] = React.useState(initialState)

  return (
    <FavouriteContext.Provider value={state}>
      {props.children}
    </FavouriteContext.Provider>
  )
}

export default Provider