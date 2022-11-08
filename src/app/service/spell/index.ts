import { TSpellListResponse, TSpellDetail } from 'AppModels'

import { request } from 'app/service'
import { Endpoints } from 'app/constant'

const getSpellList = (keyword?: string): Promise<TSpellListResponse> => {
  const requestParams: Record<string, string> = {}
  if (!!keyword) {
    requestParams.name = keyword
  }
  return request('get', Endpoints.SPELL, {
    params: requestParams
  })
}

const getSpellDetail = (index: string): Promise<TSpellDetail> => {
  return request('get', `${Endpoints.SPELL}/${index}`)
}

export {
  getSpellList,
  getSpellDetail
}