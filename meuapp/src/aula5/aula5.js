import React from 'react'
import Header from './Desafio/Header';
import Home from './Desafio/Home';
import Produtos from './Desafio/Produtos';

const aula5 = () => {
    
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

export default aula5
