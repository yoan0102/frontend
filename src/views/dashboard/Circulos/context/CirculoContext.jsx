
import { useMutation, useQuery, QueryClient } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import { circulosApi, circulosApiCreate, circulosApiDelete } from '../services/circulo.service';
import PropTypes from 'prop-types'



const CirculoContext = createContext()
const queryClient = new QueryClient();

export const CirculoProvider = ({ children }) => {
  const { data } = useQuery({ queryKey: ['circulos'], queryFn: circulosApi })

  const addCirculo = useMutation({
    mutationFn: circulosApiCreate,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['circulos'] })
    }
  })

  const deleteCirculo = useMutation({
    mutationFn: circulosApiDelete,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['circulos'] })
    },
  })

  const value = useMemo(() => ({
    data,
    addCirculo,
    deleteCirculo,
  }), [data])
  return (
    <CirculoContext.Provider value={value}>
      {children}
    </CirculoContext.Provider>
  )
}

CirculoProvider.propTypes = {
  children: PropTypes.object
}


export const useCirculoContext = () => {
  return useContext(CirculoContext)
}


