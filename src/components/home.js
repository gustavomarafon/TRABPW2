import React from 'react'
import Listar from './livro/listar'
import useAuth from '../hooks/useAuth'


const Home = () => {
  const {
    listaObjetos
  } = useAuth()
  return(
  <div>
    <h1>Seus melhores livros estão aqui</h1>
    <Listar listaObjetos={listaObjetos}/> 
  </div>

)
}
  

export default Home
