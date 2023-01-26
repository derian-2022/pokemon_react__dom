import React from 'react'

const Pokemones = ({ pokemon }) => {

  return (
    <article className='Card'>
      <img className='Card__img'src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
      <h2 className='Card__name'>{pokemon?.name}</h2>
      <ul className='Card__list'>
        <li className="Card__item"><span className='Card__label'>Type: </span>{pokemon?.types[0].type.name}</li>
        <li className="Card__item"><span className='Card__label'>Height: </span>{pokemon?.height}</li>
        <li className="Card__item"><span className='Card__label'>Weight: </span>{pokemon?.weight}</li>
      </ul>
    </article>
  )
}                         

export default Pokemones