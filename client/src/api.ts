import {GatewayType, PeripheralType} from './types'

const URL = 'http://localhost:5000/'

export const getGatways = async (): Promise<GatewayType[] | undefined> => {
  const res = await fetch(`${URL}gateway`)
  const data = await res.json()
  return data.data
}

//const url=process.env.PUBLIC_URL

export const getGatwayById = async (
  gId: string,
): Promise<GatewayType | undefined> => {
  const res = await fetch(`${URL}gateway/${gId}`)
  const data = await res.json()

  return data.data
}

type gatewayAdd = Pick<GatewayType, 'serial' | 'name' | 'ip'>
export const addGateway = async (
  gateway: gatewayAdd,
): Promise<GatewayType | undefined> => {
  const res = await fetch(`${URL}gateway`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: gateway.name,
      serial: gateway.serial,
      ip: gateway.ip,
    }),
  })
  const data = await res.json()
  return data.data
}

type gatewayUpdate = Pick<GatewayType, '_id' | 'serial' | 'name' | 'ip'>
export const updateGatway = async (
  gateway: gatewayUpdate,
): Promise<GatewayType | undefined> => {
  const res = await fetch(`${URL}gateway/${gateway._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: gateway.name,
      serial: gateway.serial,
      ip: gateway.ip,
    }),
  })
  const data = await res.json()

  return data.data
}

export const deleteGatway = async (gId: string): Promise<{} | undefined> => {
  const res = await fetch(`${URL}gateway/${gId}`, {
    method: 'DELETE',
  })
  const data = await res.json()

  return data.data
}
