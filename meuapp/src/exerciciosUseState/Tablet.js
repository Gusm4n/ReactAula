import React from 'react'

const Tablet = () => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/tablet')
    .then(response => response.json())
    .then(resposta => {
        console.log(resposta.nome)
    })
    return (
        <div>
           
        </div>
    )
}

export default Tablet
