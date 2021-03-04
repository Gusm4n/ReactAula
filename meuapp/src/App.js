import React from 'react';

/*  AULA 1 - JSX */

// const luana = {
//     cliente: 'Luana',
//     idade: 27,
//     compras: [
//       { nome: 'Notebook', preco: 'R$ 2500' },
//       { nome: 'Geladeira', preco: 'R$ 3000' },
//       { nome: 'Smartphone', preco: 'R$ 1500' },
//     ],
//     ativa: true,
//   };
  
//   const mario = {
//     cliente: 'Mario',
//     idade: 31,
//     compras: [
//       { nome: 'Notebook', preco: 'R$ 2500' },
//       { nome: 'Geladeira', preco: 'R$ 3000' },
//       { nome: 'Smartphone', preco: 'R$ 1500' },
//       { nome: 'Guitarra', preco: 'R$ 3500' },
//     ],
//     ativa: false,
//   };

// const App = () => {

//     const dados = luana;

//   const total = dados.compras
//     .map((item) => Number(item.preco.replace('R$ ', '')))
//     .reduce((a, b) => a + b);
//     return (
//         <div>
//         <p>Nome: {dados.cliente}</p>
//         <p>Idade: {dados.idade}</p>
//         <p>
//           Situação:{' '}
//           <span style={{ color: dados.ativa ? 'green' : 'red' }}>
//             {dados.ativa ? 'Ativa' : 'Inativa'}
//           </span>
//         </p>
//         <p>Total: R$ {total}</p>
//         {total > 10000 && <p>Você está gastando muito</p>}
//       </div>
//     );
// }

/*FIM DA AULA 1 - JSX */

/* AULA 2 - JSX ARRAYS */


// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500


// const App = () => {
//   const produtos = [
//     {
//       id: 1,
//       nome: 'Smartphone',
//       preco: 'R$ 2000',
//       cores: ['#29d8d5', '#252a34', '#fc3766'],
//     },
//     {
//       id: 2,
//       nome: 'Notebook',
//       preco: 'R$ 3000',
//       cores: ['#ffd045', '#d4394b', '#f37c59'],
//     },
//     {
//       id: 3,
//       nome: 'Tablet',
//       preco: 'R$ 1500',
//       cores: ['#365069', '#47c1c8', '#f95786'],
//     },
//   ];
  
//   return <section>
//     {produtos
//     .filter((produto) => produto.preco.replace('R$ ', '') > 1500)
//     .map((produto) => (
//       <div key={produto.id}>
//         <h1>{produto.nome}</h1>
//         <p>{produto.preco}</p>
//         <ul>
//           {produto.cores.map((cor) => (
//             <li style={{backgroundColor: cor, color: 'white'}}key={cor}>{cor}</li>
//           ))}
//         </ul>
//       </div>
//     ))
//     }
//   </section>;
// };

/* FIM DA AULA 2 - JSX ARRAY*/

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


const App = () => {
  return (
    <div>
      
    </div>
  )
}



export default App; 
