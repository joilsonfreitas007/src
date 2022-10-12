import React from "react";

const Questao01A = (props) => {
    const { nome, sobrenome, curso } = props
   
    // class Fullstop extends React.Component { 
    //     render() { 
    //       return <h1>teste</h1> 
    //     } 
    //   }
    return (
        <div >
            <h2> Nome: {nome} </h2> 
            <h2> Sobrenome: {sobrenome}</h2> 
            <h2>Curso:{curso}</h2> 
        
      
           
    
        </div>
    )
}
   
  

export default Questao01A