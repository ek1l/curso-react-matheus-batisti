import { useCallback, useEffect, useReducer } from 'react';

const useFetch = (url) => {
  const initialState = {
    isLoading: true,
    data: undefined,
    error: undefined,
  };
  const fetched = (state, action) => {
    switch (action.type) {
      case 'loading':
        return { ...initialState, isLoading: true };
      case 'fetched':
        return { ...initialState, data: action.payload, isLoading: false };
      case 'error':
        return { ...initialState, error: action.payload, isLoading: false };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(fetched, initialState);
  const handleFetch = useCallback(async () => {
    dispatch({ type: 'loading' });
    try {
      const fazerChamado = await fetch(url);
      const pegarDados = await fazerChamado.json();
      dispatch({ type: 'fetched', payload: pegarDados });
      console.log(pegarDados);
    } catch (error) {
      dispatch({ type: 'error', payload: error });
    }
  }, [url]);
  
  useEffect(() => {
    handleFetch();
  }, [handleFetch]);

  return { data: state.data, error: state.error, isLoading: state.isLoading };
};

export default useFetch;
