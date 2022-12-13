import { baseAxios } from '../../../../api/baseAxios';


export const circulosApi = async () => {
  const circulos = await baseAxios.get('/circulos')
  return circulos.data
}

export const circulosApiCreate = async (circulo) => {
  const circuloCreated = await baseAxios.post('/circulos', circulo)
  return circuloCreated.data
}


export const circulosApiDelete = async (circuloId) => {
  await baseAxios.delete(`/circulos/${circuloId}`
  )
}
