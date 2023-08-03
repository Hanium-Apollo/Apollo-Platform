import { useContext } from 'react';
import TokenContext from '../contexts/TokenContext';

const useToken = () => {
  const context = useContext(TokenContext)
  return context
}

export default useToken