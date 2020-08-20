import {useState, useEffect} from 'react';

const useInitialState = (API) => {
    const [videos, setVideos] = useState({mylist: [], trends: [], originals:[]}); /*recibe elementos para inicializar,como string, boolean, number, objeto u arreglo*/
  
    useEffect(() => {
      fetch(API) // al pasar API volvemos agnostica a la funcnion y podemos utilizar cualquier api donde sea necesario//
      .then(response => response.json()) /* se debe convertir en un elemtno que se pueda ocupar en la aplicacion, por eso se pasa a .json*/
      .then(data => setVideos(data)); /* se hace otro llamado, permite pasar la info que tenemos a la funncion setVideos y este transmite la info*/
    }, []); /* USEEFFECT RECIBE OTRO PARAMETRO EL QUE SE ENCARGA DE ESCUCHAR ALGUN CAMBIO, SI NO LE COLOCAMOS UN ARRAY VACIO, ESTE HARIA UN LOOPS INFITITO*/
  return videos;  
};
export default useInitialState;