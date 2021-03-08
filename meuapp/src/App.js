import React from 'react';

/* AULA 4 - COMPONENTES */
// import Form from './Form/Form'
 
// const App = () => {
//   return (
//     <div>
//       <Form />
//     </div>
//   )
// }

/* FIM DA AULA 4 - COMPONENTES */

/* AULA 5 - DESAFIO COMPONENTES */

import Header from './Desafio/Header';
import Home from './Desafio/Home';
import Produtos from './Desafio/Produtos';

const App = () => {

  let Pagina;
  const { pathname } = window.location;
  if(pathname === '/produtos') {
    Pagina = Produtos
  }else {
    Pagina = Home
  }

  return (
    <div>
      <Header />
      <Pagina />
    </div>
  )
}



export default App; 
