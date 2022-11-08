import React from 'react'
import {
  useQuery,
  useQueryClient
} from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import Skeleton from 'antd/lib/skeleton'
import Table from 'antd/lib/table'
import Input from 'antd/lib/input'
import Row from 'antd/lib/row'
import Col from 'antd/lib/col'
import Button from 'antd/lib/button'
import { EyeOutlined, HeartTwoTone } from '@ant-design/icons'
import type { ColumnsType } from 'antd/es/table'

import {
  TSpellsPageProps,
  TSpellColumn
} from 'AppModels'

import { getSpellList } from 'app/service/spell'
import { Routes } from 'app/constant'
import FavouriteContext from 'app/context/FavouriteContext'

import styles from './SpellsPage.module.scss'

const { Search } = Input

const SpellsPage: React.FC<TSpellsPageProps> = (): React.ReactElement => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const favContext = React.useContext(FavouriteContext)
  const { data, isLoading } = useQuery({
    queryKey: ['spells'],
    queryFn: () => getSpellList(),
    keepPreviousData: true,
  })
  

  const columns: ColumnsType<TSpellColumn> = [
    {
      title: 'No.',
      dataIndex: '',
      align: 'center',
      width: 80,
      render: (_, __, index) => index + 1
    },
    {
      title: 'Name',
      dataIndex: 'name',
      onCell: (record) => {
        return {
          onClick: () => navigate(`${Routes.SPELLS}/${record.index}`)
        }
      }
    },
    {
      title: 'Actions',
      dataIndex: '',
      align: 'center',
      render: (_, record) => {
        const { index } = record
        return (
          <div className={styles.actionBtnSection}>
            <Button
              shape="circle"
              icon={<EyeOutlined />}
              onClick={() => navigate(`${Routes.SPELLS}/${index}`)}
            />
            <Button
              shape="circle"
              icon={<HeartTwoTone twoToneColor="#eb2f96" />}
              onClick={() => favContext?.addNew(record)}
            />
          </div>
        )
      }
    }
  ]

  const handleSpellsSeach = (value: string) => {
    queryClient.fetchQuery({
      queryKey: ['spells'],
      queryFn: () => getSpellList(value)
    })
  }

  return (
    <div className={styles.wrapper}>
      <Row className={styles.searchSection}>
        <Col xs={6}>
          <Search
            placeholder='Search for spell...'
            onSearch={handleSpellsSeach}
            allowClear
          />
        </Col>
      </Row>
      <Row>
        <Col xs={24}>
          {
            isLoading ?
              <Skeleton active />
              :
              <Table
                columns={columns}
                dataSource={data?.results}
                rowKey={record => record.index}
              />
          }
        </Col>
      </Row>
    </div>
  )
}

export default React.memo(SpellsPage)