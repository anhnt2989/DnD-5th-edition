import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'antd/lib/button'
import { DeleteOutlined } from '@ant-design/icons'

import { TSpellListRecord } from 'AppModels'

import { Routes } from '@app/constant'
import FavouriteContext from '@app/context/FavouriteContext'

import styles from './SpellItem.module.scss'

const SpellItem: React.FC<TSpellListRecord> = (props): React.ReactElement => {
  const {
    index,
    name,
  } = props
  const favContext = React.useContext(FavouriteContext)

  const removeSpell = React.useCallback(() => favContext?.remove(props), [favContext, props])

  return (
    <div className={styles.wrapper}>
      <Link to={`${Routes.SPELLS}/${index}`}>{name}</Link>
      <Button
        shape='circle'
        icon={<DeleteOutlined />}
        onClick={removeSpell}
      />
    </div>
  )
}

export default SpellItem