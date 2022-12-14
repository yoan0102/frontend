import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import { createContext, useContext, /* useMemo */ } from 'react';
import { submisionsApi, submisionsApiCreate, submisionsApiDelete } from '../service/submision.service';
import PropTypes from 'prop-types'



const SubmisionContext = createContext()
const queryClient = new QueryClient();

export const SubmisionProvider = ({ children }) => {
  const { data } = useQuery({ queryKey: ['submisions'], queryFn: submisionsApi })

  const addSubmision = useMutation({
    mutationFn: submisionsApiCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['submisions'] })
    }
  })

  const deleteSubmision = useMutation({
    mutationFn: submisionsApiDelete,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['submisions'] })
    },
  })

  const value = {
    data,
    addSubmision,
    deleteSubmision
  }
  return (
    <SubmisionContext.Provider value={value}>
      {children}
    </SubmisionContext.Provider>
  )
}

SubmisionProvider.propTypes = {
  children: PropTypes.object
}


export const useSubmisionContext = () => {
  return useContext(SubmisionContext)
}


