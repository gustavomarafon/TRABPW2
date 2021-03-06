import React from 'react'

const Lista = ({listaObjetos}) => {
  return (
    <div>
      <h1>Meus Livros</h1>
    

      { listaObjetos && <h1>SEM REGISTROS</h1> }

      { listaObjetos && (
        <table className="lista">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Ano</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            { listaObjetos.map(objeto => (
              <tr key={objeto.id}>
                <td>{objeto.id}</td>
                <td>{objeto.titulo}</td>
                <td>{objeto.autor}</td>
                <td>{objeto.ano}</td> 
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Lista
