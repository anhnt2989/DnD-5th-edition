import React from 'react'
import Layout from 'antd/lib/layout'
import Menu from 'antd/lib/menu'
import Divider from 'antd/lib/divider'
import Button from 'antd/lib/button'
import Drawer from 'antd/lib/drawer'
import { 
  ThunderboltOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons'
import { useLocation, Link, Outlet } from 'react-router-dom'

import { 
  TMainLayoutProps,
  TMenuItem
} from 'AppModels'

import { Routes } from '@app/constant'
import LogoSrc from '@app/asset/images/logo.png'
import FavouriteContext from '@app/context/FavouriteContext'
import SpellItem from '@components/Spell/SpellItem'

import styles from './MainLayout.module.scss'

const { Sider, Content } = Layout;
const { Item } = Menu

const menuItems: Array<TMenuItem> = [
  {
    key: Routes.SPELLS,
    label: 'Spells',
    hasChildren: false,
    icon: <ThunderboltOutlined />,
    items: null
  }
]

const MainLayout: React.FC<TMainLayoutProps> = (props): React.ReactElement => {
  const { children } = props
  const location = useLocation()
  const favContext = React.useContext(FavouriteContext)
  const [isCollapsed, setCollapseStatus] = React.useState<boolean>(true)
  const [isDrawerShown, setDrawerStatus] = React.useState<boolean>(false)

  const onCollapse = (value: boolean) => {
    setCollapseStatus(value)
  }

  const toggleDrawer = () => {
    setDrawerStatus(!isDrawerShown)
  }

  const favListMemo = React.useMemo(() => {
    return favContext?.list
  }, [favContext?.list])

  return (
    <Layout className={styles.wrapper}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapse} theme="light">
        <div className={styles.logoSection}>
          <img className={styles.img} src={LogoSrc} alt="logo" />
        </div>
        <Divider />
        <Menu
          theme='light'
          defaultSelectedKeys={[location?.pathname]}
        >
          {
            menuItems.map((item: TMenuItem) => {
              const { key, label, icon } = item
              return (
                <Item icon={icon} key={`sidebar-item__${key}`}>
                  <Link to={key}>{label}</Link>
                </Item>
              )
            })
          }
        </Menu>
        <Divider />
        <div className={styles.fnSection}>
          <Button
            shape='circle'
            icon={<ShoppingCartOutlined />}
            onClick={toggleDrawer}
          />
        </div>
      </Sider>
      <Content className={styles.content}>
        {React.Children.toArray(children)}
        <Drawer title="Favourite Spells" placement="right" onClose={toggleDrawer} open={isDrawerShown}>
          {
            favListMemo?.length && favListMemo.map(spell => (
              <SpellItem key={spell.index} {...spell} />
            ))
          }
        </Drawer>
        <Outlet />
      </Content>
    </Layout>
  )
}

export default MainLayout