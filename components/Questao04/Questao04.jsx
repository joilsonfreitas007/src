import axios from "axios"
import { useEffect, useState } from "react"

const Questao04 = () => {
    //guardatodos
    const [africa, setAfrica] = useState([])

    const [populacao, setPop] = useState(0)
    const [name, setName] = useState('')

    // console.log('inidddd',africa)


    useEffect(
        () => {
            //ler url
            axios.get('https://restcountries.com/v2/region/africa?fields=name,population')
                .then(
                    (response) => {setAfrica(response.data)}
                ).catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }, []//break
    )

    const listaPaises = () => {
        return africa.map(
            (element, index) => {
                return (

                    <tr>
                        <td>{element.name}</td>
                        <td>{element.population}</td>
                    </tr>


                )
            }
        )

    }

    const maisPopuloso = () => {

        console.log('teste', populacao)
        return africa.map(
            (element) => {
                if (populacao < element.population) {
                    setPop(element.population)
                    setName(element.name)
                    // console.log('aaaa', pop, 'nome', element.name)
                
                    return null
                }

            }
        )
    }

    return (
        
        <div>
          <h1>Paises da Africa</h1>  
            <h3> O País mais populoso {name}</h3>
            {maisPopuloso()}
            <table className='table table-striped table-dark'>
            <thead class="table table-striped table-dark">
                    <tr>
                        <th>País</th>
                        <th>População</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPaises()}
                </tbody>
            </table>
        </div>
    )
}

export default Questao04