import React from 'react'
import Carousel from '../carousel/Carousel'

const Inicio = () => {
    return (
        <div className='inicio'>
            <Carousel />
            <div className='container'>
                <h1 className='bg-dark text-white mt-3 p-2'>Pokemon</h1>
                <figure>
                    <blockquote className='blockquote'>
                        <p className='text-center text-white mt-3'>
                            Los Pokémon son una clase de criaturas inspiradas en animales reales, insectos, objetos, plantas o criaturas mitológicas con un sistema de evolución lamarckiano. Los jugadores toman el papel Entrenadores Pokémon y tienen tres objetivos generales: completar la Pokédex mediante la recopilación de todas las especies de Pokémon disponibles que se encuentran, entrenar un equipo de Pokémon poderosos de aquellos que han atrapado para competir contra otros entrenadores. El objetivo final del juego es llegar a ganar la Liga Pokémon y convertirse en el campeón regional. La temática de coleccionar, entrenar y luchar están presentes en casi todas las versiones de la franquicia Pokémon, incluidos los videojuegos, las series de anime y manga, y el juego de cartas coleccionables Pokémon.
                            En la saga principal, el jugador emprenderá un viaje en el que deberá recorrer una región específica del mundo Pokémon. En determinadas ciudades existen una serie de poderosos entrenadores, conocidos como Líderes de Gimnasio, que el entrenador debe derrotar para obtener las medallas de gimnasio y poder progresar. Una vez que se recogen todas las medallas de la región, el entrenador es elegible para desafiar la Liga Pokémon de la región, donde le esperan cuatro de los mejores entrenadores a los que se deberá enfrentar para obtener el título de Campeón.
                            La saga también tiene arcos argumentales secundarios: En la mayoría de títulos existe un equipo antagonista, una banda cuyos planes están relacionados con el tráfico, la explotación o el maltrato de Pokémon y que el jugador deberá derrotar. Muchos títulos también implican que el jugador pueda desentrañar misterios sobre la existencia de Pokémon legendarios o míticos.

                        </p>
                    </blockquote>
                </figure>
                <h2 className='bg-dark text-white mb-5'>Opening</h2>
                <iframe width='100%' height='500' src='./Img/opening.mp4' title='Youtube Video Player'></iframe>
            </div>
        </div>
    )
}

export default Inicio