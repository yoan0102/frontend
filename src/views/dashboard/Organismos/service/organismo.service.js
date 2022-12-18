import { baseAxios } from '../../../../api/baseAxios';


export const organismosApi = async () => {
  const organismos = await baseAxios.get('/organismos')
  return organismos.data
}


export const organismosApiCreate = async (organismo) => {
  console.log(organismo);
  const organismoCreated = await baseAxios.post('/organismos', organismo)
  return organismoCreated.data
}


export const organismosApiDelete = async (organismoId) => {
  await baseAxios.delete(`/organismos/${organismoId}`
  )
}

export const organismosApiUpdate = async (organismo) => {
  await baseAxios.patch(`/organismos/${organismo.id}`, {
    ...organismo
  }
  )
}

