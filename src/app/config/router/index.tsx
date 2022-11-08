import React from 'react'
import { TAppRoute } from "AppModels"

import { Routes } from "app/constant"
import PageNotFound from 'views/containers/PageNotFound'
import LandingPage from 'views/containers/LandingPage'
import { MainLayout } from 'views/components/Layout'

const SpellsPageLazy = React.lazy(() => import('views/containers/SpellsPage'))
const SpellDetailPageLazy = React.lazy(() => import('views/containers/SpellsPage/pages/Detail'))

const AppRoutes: Array<TAppRoute> = [
  {
    path: Routes.HOME,
    element: <LandingPage />
  },
  {
    path: Routes.SPELLS,
    element: <MainLayout />,
    children: [
      {
        path: '',
        element: <SpellsPageLazy />
      },
      {
        path: ':nameIndex',
        element: <SpellDetailPageLazy />
      },
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]

export default AppRoutes