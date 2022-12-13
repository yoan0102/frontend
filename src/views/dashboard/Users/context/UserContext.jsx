import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import { createContext, useContext, /* useMemo */ } from 'react';
import { usersApi, usersApiCreate, usersApiDelete } from '../service/user.service';
import PropTypes from 'prop-types'



const UserContext = createContext()
const queryClient = new QueryClient();

export const UserProvider = ({ children }) => {
  const { data } = useQuery({ queryKey: ['users'], queryFn: usersApi })

  const addUser = useMutation({
    mutationFn: usersApiCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  const deleteUser = useMutation({
    mutationFn: usersApiDelete,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['users'] })
    },
  })

  const value = {
    data,
    addUser,
    deleteUser,
  }
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


