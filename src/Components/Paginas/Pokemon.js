import React, { useState } from 'react'
import { UseFetch } from '../UseFetch'
import { Cards } from '../Cards/Cards'

const Pokemon = () => {

    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon')

    const estado = UseFetch(url)
    const { cargando, data } = estado

    return (
        <div className='inicio'>

            <h1 className='container text-white pt-3'>Listado Pokémon</h1>
            {
                cargando
                    ?
                    <h1>Cargando...</h1>
                    :
                    <div>

                        <Cards results={data.results} />
                        <div className='container m-auto'>
                            <button onClick={() => setUrl(data.previous)} className='btn btn-secondary m-2'>Anterior</button>
                            <button onClick={() => setUrl(data.next)} className='btn btn-secondary'>Siguiente</button>

                        </div>
                    </div>
            }
        </div>
    )
}

export default Pokemon