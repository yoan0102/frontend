import { baseAxios } from '../../../../api/baseAxios';


export const organismosApi = async () => {
  const organismos = await baseAxios.get('/organismos')
  return organismos.data
}

export const organismosApiCreate = async (organismo) => {
  const organismoCreated = await baseAxios.post('/organismos', organismo)
  return organismoCreated.data
}


export const organismosApiDelete = async (organismoId) => {
  const organismoDeleted = await baseAxios.delete(`/organismos/${organismoId}`
  )
  return organismoDeleted.status
}
