import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';

import { organismosApi, organismosApiCreate, organismosApiDelete } from '../service/organismo.service';
import PropTypes from 'prop-types'



const OrganismoContext = createContext()


export const OrganismoProvider = ({ children }) => {
  const { data: organismos } = useQuery({ queryKey: ['organismos'], queryFn: organismosApi })

  const queryClient = useQueryClient();

  const addOrganismo = useMutation({
    mutationFn: organismosApiCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organismos'] })
    }
  })

  const deleteOrganismo = useMutation({
    mutationFn: organismosApiDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organismos'] })
    },
  })

  const updateOrganismo = useMutation({
    mutationFn: organismosApiDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organismos'] })
    },
  })

  const value = useMemo(() => ({
    organismos,
    addOrganismo,
    deleteOrganismo,
    updateOrganismo,
  }), [organismos])
  return (
    <OrganismoContext.Provider value={value}>
      {children}
    </OrganismoContext.Provider>
  )
}

OrganismoProvider.propTypes = {
  children: PropTypes.node
}


export const useOrganismoContext = () => {
  return useContext(OrganismoContext)
}


