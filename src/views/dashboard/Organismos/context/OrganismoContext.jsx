
import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import { organismosApi, organismosApiCreate, organismosApiDelete } from '../service/organismo.service';
import PropTypes from 'prop-types'



const OrganismoContext = createContext()
const queryClient = new QueryClient();

export const OrganismoProvider = ({ children }) => {
  const { data } = useQuery({ queryKey: ['organismos'], queryFn: organismosApi })

  const addOrganismo = useMutation({
    mutationFn: organismosApiCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organismos'] })
    }
  })

  const deleteOrganismo = useMutation({
    mutationFn: organismosApiDelete,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['organismos'] })
    },
  })

  const value = {
    data,
    addOrganismo,
    deleteOrganismo,
  }
  return (
    <OrganismoContext.Provider value={value}>
      {children}
    </OrganismoContext.Provider>
  )
}

OrganismoProvider.propTypes = {
  children: PropTypes.object
}


export const useOrganismoContext = () => {
  return useContext(OrganismoContext)
}


