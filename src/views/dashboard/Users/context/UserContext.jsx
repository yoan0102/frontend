import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';

import { usersApi, usersApiCreate, usersApiDelete } from '../service/user.service';
import PropTypes from 'prop-types'



const UserContext = createContext()


export const UserProvider = ({ children }) => {
  const { data: users } = useQuery({ queryKey: ['users'], queryFn: usersApi })

  const queryClient = useQueryClient();

  const addUser = useMutation({
    mutationFn: usersApiCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const deleteUser = useMutation({
    mutationFn: usersApiDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const updateUser = useMutation({
    mutationFn: usersApiDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const value = useMemo(() => ({
    users,
    addUser,
    deleteUser,
    updateUser,
  }), [users])
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.object
}


export const useUserContext = () => {
  return useContext(UserContext)
}


