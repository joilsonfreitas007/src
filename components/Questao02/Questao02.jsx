import React, { useState } from "react";

const Questao02 = () => {

    const [n1, setn1] = useState(0);
    const [n2, setn2] = useState(0);
    const [soma, setSoma] = useState(0);
    const [sub, setSub] = useState(0);
    const [mult, setMult]= useState(0);
    const [div,setDiv]= useState(0);

    const [resultado, setResultado]= useState(0)

    



    const somar_num = () =>{ 
        // console.log('Num', n1)
        const x= parseFloat(n1);
        const y = parseFloat(n2);
        setSoma(x+y)     
        setResultado(soma)   
    }

    const subr = () =>{ setSub(n1-n2) 
        setResultado(sub)  
    }
    const multi = () =>{ setMult(n1*n2)  
        return setResultado(mult)   
    }
    const divisao = () =>{ setDiv(n1-n2) 
      return setResultado(div)
        
    }
    const results = () =>{ return resultado  }
    
    return (
        <div>
            <form>
                <input
                    type="text"
                    value={n1}
                    onChange={(e) => setn1(e.target.value)}
                />

                <input
                    type="text"
                    value={n2}
                    onChange={(e) => setn2(e.target.value)}
                />
            </form>
            <div >
                <button onClick={somar_num}>+</button>
                <button onClick={subr} >-</button>
                <button onClick={multi}>*</button>
                <button onClick={divisao}>/</button>


                <p>Resultado </p>
                {results()}
            </div>

        </div>
    )
}

export default Questao02