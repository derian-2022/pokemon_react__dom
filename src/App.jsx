import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Pokemones from './components/Pokemones'

function App() {


        //PARA GUARDAR LA INFO DE LA API
  const [pokemon, setPokemon] = useState()
      ///PARA GUARDAR LO QUE INGRESAMOS EN EL INPUT
  const [inputValue, setInputValue] = useState("pikachu")
      //PARA CONTROLAR EL ERROR DE LA API
  const [hasError, setHasError] = useState(false)
      //PARA GENERAR UNA PANTALLA DE CARGA 
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    /**
     * SE HACE LA PETICION DEPENDIENDO DEL INPUTVALUE
     * EL VALOR DEL ISLOADING CAMBIA APENAS SE HAGA LA PETICION
     * AL EJECUTAR EL CATCH COLOCAMOS EN TRUE EL ESTADO HASERROR
     * AL EJECUTAR EL THEN COLOCAMOS EL FALSE EL ESTADO HASEROR
     * FINALLY SE EJECUTA SIEMPRE AL FINAL, INDEPENDIENTEMENTE DE SI SE ACTIVA EL THEN O EL CATCH
     */
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`
    setIsLoading(true)
    axios.get(url)
      .then(res => {
        setPokemon(res.data)
        setHasError(false)
      })
      .catch(err => { 
        console.log(err)
        setHasError(true)
      })
      .finally(() => { 
        // setTimeout(() => setIsLoading(false), 3000)
        setIsLoading(false)
      }) 
      // EL CALLBACK DE USEEFFECT SE EJECUTA EN EL PRIMER RENDERIZADO Y CADA VEZ QUE CAMBIA EL VALOR DE INPUTVALUE
  }, [inputValue])
                        
    const handleSubmit = e => {
      e.preventDefault()
      setInputValue(e.target.namePoke.value)
    }

    console.log(inputValue)

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input id='namePoke' type="text" />
        <button>Search</button>
      </form>
      <div className='Card-container'>

        {
          isLoading ?
          <h1>Loading..</h1>
          :
          hasError ?
          <h1>Pokemon not found 😳</h1>
          :
          <Pokemones pokemon={pokemon}/>
        }
      </div>
      
    </div>
  )
}

export default App
