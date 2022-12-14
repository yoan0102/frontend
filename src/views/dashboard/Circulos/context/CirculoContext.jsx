
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createContext, useContext, useMemo } from 'react';
import { circulosApi, circulosApiCreate, circulosApiDelete } from '../services/circulo.service';
import PropTypes from 'prop-types'



const CirculoContext = createContext()

export const CirculoProvider = ({ children }) => {
  const { data: circulos } = useQuery({ queryKey: ['circulos'], queryFn: circulosApi })

  const queryClient = useQueryClient();

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

  const updateCirculo = useMutation({
    mutationFn: circulosApiDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['circulos'] })
    },
  })

  const value = useMemo(() => ({
    circulos,
    addCirculo,
    deleteCirculo,
    updateCirculo,
  }), [circulos])
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


