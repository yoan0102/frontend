import { baseAxios } from '../../../../api/baseAxios';


export const usersApi = async () => {
  const users = await baseAxios.get('/users')
  return users.data
}

export const usersApiCreate = async (user) => {
  const userCreated = await baseAxios.post('/users', user)
  return userCreated.data
}


export const usersApiDelete = async (userId) => {
  await baseAxios.delete(`/user/${userId}` 
  )
}

export const usersApiUpdate = async (user) => {
  await baseAxios.patch(`/users/${user.id}`, {
    ...user
  }
  )
}
