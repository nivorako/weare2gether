import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setActivePage } from '../features/pageSlice';

const Connexion = () => {
  const dispatch = useDispatch();

  // Mettre à jour l'état de la page active lorsque le composant est monté
  useEffect(() => {
    dispatch(setActivePage('Connexion'));
  }, [dispatch]);
  return (
    <div>
        page connexion
    </div>
  )
}

export default Connexion
