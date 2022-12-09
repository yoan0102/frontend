
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import { organismosApi } from '../../../../api/organismo.service';
import PropTypes from 'prop-types'



const OrganismoContext = createContext()

export const OrganismoProvider = ({ children }) => {
  const { data } = useQuery({ queryKey: ['organismos'], queryFn: organismosApi })

  const value = useMemo(() => ({
    data
  }), [data])
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


