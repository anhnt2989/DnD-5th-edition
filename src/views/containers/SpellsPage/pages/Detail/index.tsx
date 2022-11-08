import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Skeleton from 'antd/lib/skeleton'
import Button from 'antd/lib/button'
import { HeartTwoTone } from '@ant-design/icons'

import { TSpellDetailProps } from 'AppModels'

import { getSpellDetail } from 'app/service/spell'
import SpellDetail from 'views/components/Spell/SpellDetail'
import FavouriteContext from 'app/context/FavouriteContext'

import styles from './Detail.module.scss'

const Detail: React.FC<TSpellDetailProps> = (): React.ReactElement => {
  const { nameIndex } = useParams()
  const favContext = React.useContext(FavouriteContext)

  const { data, isLoading } = useQuery({
    queryKey: ['spells', nameIndex],
    queryFn: () => getSpellDetail(nameIndex as string),
    enabled: !!nameIndex
  })

  return (
    <div className={styles.wrapper}>
      {
        isLoading ?
          <Skeleton active />
        :
          <React.Fragment>
            <div className={styles.buttonSection}>
              <Button 
                shape='circle'
                icon={<HeartTwoTone twoToneColor="#eb2f96" />}
                onClick={() => favContext?.addNew({
                  index: data?.index as string,
                  name: data?.name as string,
                  url: data?.url as string
                })}
              />
            </div>
            
            <SpellDetail {...data} />
          </React.Fragment>
          
      }
    </div>
  )
}

export default React.memo(Detail)