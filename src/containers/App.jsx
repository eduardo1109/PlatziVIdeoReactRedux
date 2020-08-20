import React, {useState, useEffect} from 'react'; {/* useState puedo manejar los estados y con UseEffects hago las transmisiones, puedo hacer peticiones una api
o algun evento que se trasmita a nuestros componentes  escuchar algun cambio que se realice en ellos*/}
import Header from '../components/Header';
import Search from '../components/Search';
import useInitialState from '../Hooks/useInitialState';
import Categories from '../components/Categories';
import Carrusell from '../components/Carrusell';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import '../assets/style/App.scss';


const API = 'http://localhost:3000/initialState/'
 
const App =() => {
  const initialState= useInitialState(API);
  return initialState.length ===  0 ? <h1>Loading...</h1> : (
    <div className= "App">
        <Header />
        <Search />

        {initialState.mylist?.length > 0 && 
        <Categories title="Mi Lista">    {/* pasamos por categoria categoria, luego como carrusel esta bajo categoria se damos 
        una etiqueta, que es carrrusel, y carrusllItem es el ultimo item */ }
        <Carrusell>
          {initialState.mylist?.map(item =>
          <CarouselItem key={item.id} {...item} /> )}
           {/* como son varios item lo dejamos asi para poder ocuparlos*/}
        </Carrusell>
        </Categories>
        } 
        
        <Categories title="Tendencias">   
         <Carrusell>
           {initialState.trends?.map(item =>
             <CarouselItem key={item.id} {...item}  />  // se llamamos a videos.tends, le hacemos un map para que
             //vamos a tener el resultado de cada uno de estos item y por cada uno de ellos le pasaremos la informacion (item)
             //luego lo vamos iterar, con lo que pasamos dos propiedades a carusselItem, el primero sera una key 
             //que nos traera item.id y lugo se pasan todos los elementos que contenga item, para eso desteucturamos 
             //item (...item)//*}
             )};
         </Carrusell>
        </Categories>

        <Categories title="Originales">   
         <Carrusell>
           {initialState.originals?.map (item =>
            <CarouselItem key={item.id} {... item} /> 
             )}
   
         </Carrusell>
        </Categories>

        <Footer/>

    </div>
  )
}
export default App;