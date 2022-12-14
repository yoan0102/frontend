import { baseAxios } from '../../../../api/baseAxios';


export const submisionsApi = async () => {
  const submisions = await baseAxios.get('/submisions')
  return submisions.data
}

export const submisionsApiCreate = async (submision) => {
  const submisionCreated = await baseAxios.post('/submisions', submision)
  return submisionCreated.data
}


export const submisionsApiDelete = async (submisionId) => {
  await baseAxios.delete(`/submisions/${submisionId}`
  )
}
