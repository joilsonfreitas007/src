import React from "react";

const Questao01B = (props)=>{
    let diciplina =['DESENVOLVIMENTO WEB','REQUISTOS', 'PERSISTENCIA']
    return (
        <div >
            <h4>Disciplinas 2022.2</h4>

            {
                diciplina.map(
                    (disciplina) => {
                        return (
                            <p> {disciplina}</p>
                        )
                    }
                      
                )
            }

        </div>

    )
}


export default Questao01B;