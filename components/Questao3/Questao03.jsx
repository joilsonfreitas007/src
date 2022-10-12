import axios from "axios";
import React, { useEffect, useState } from "react";
// import {pokeList} from 'https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

const Questao03 = () => {
    const [pokemons, setPokemons] = useState([])
    const [offset, setOffset] = useState(0)

    // console.log('poke',pokemons)


    useEffect(
        () => {
            axios.get('https://pokeapi.co/api/v2/pokemon?limit=10&offset='+offset)
                .then(
                    (response) => {
                        
                        setPokemons(response.data.results)

                    }
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }, [offset]
    )

        
    const listaPokemons = () => {
        
        return pokemons.map(
            (element,index) => {

                    return (
                        <tr>
                            <td>{element.name}</td>
                        </tr>
                    )
                    // console.log(teste)
                }
            )
        
   

    }

    const addP = () =>{
        setOffset(offset+10)
    }

    return (
        <div>
            <h2>Lista Pokemons </h2>
            <table className='table table-striped table-dark'>
        <tbody>
          {listaPokemons()}
        </tbody>
        </table>
        {/* <button variant="contained" color="success">
  Success</button> */}
        <button onClick={addP}>Exibir 10 pokemons</button>
        </div>
    )

}

export default Questao03
