import React from 'react'
import Produto from './Produto';
import TituloHome from './TituloHome'

const Produtos = () => {

const produtos = [
    { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
    { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
  ];
  
    return (
        <div>
            <TituloHome texto="Produtos" />
        {produtos.map((produto) => (
            <Produto key={produto.nome} {...produto}/>
        ))}
        </div>
    )
}

export default Produtos
