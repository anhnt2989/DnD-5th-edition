import { FC, ReactElement } from "react"

declare module 'AppModels' {
  export type TAppRoute = {
    path: string
    element: LazyExoticComponent<FC<ReactElement>>
    children?: Array<LazyExoticComponent<FC<ReactElement>>>
  }
}