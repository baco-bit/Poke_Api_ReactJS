import React from 'react'
import { UseFetch } from '../UseFetch'

export const CardPokemon = ({ url }) => {

    const estado = UseFetch(url)
    const { cargando, data } = estado
    console.log(data)
    return (
        <div>
            {
                cargando
                    ?
                    <h1>Cargando</h1>
                    :
                    <div className='card' style={{ width: '14rem' }}>
                        <div className='card-header'>
                            <h5 className='card-title'>N°: {data.id}</h5>
                        </div>
                        <div className='card-body'>
                            <img className='img-body' src={data.sprites.other.dream_world.front_default} alt='pokemon'></img>
                        </div>
                        <div className='card-footer'>
                            <p className='card-text text-capitalize'>Nombre: {data.forms[0].name}</p>
                            <p className='card-text text-capitalize'>Tipo: {data.types[0].type.name}</p>
                        </div>
                    </div>
            }
        </div>
    )
}
