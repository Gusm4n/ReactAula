import React from 'react'

const Hooks = () => {
    const [ativo, setAtivo] = React.useState(false);
    console.log(ativo)

    function handleClick(){
        setAtivo(!ativo)
    }
    return (
        <button onClick={handleClick}>{ativo ? 'ativo' : 'Inativo'}</button>
        
    )
}

export default Hooks
