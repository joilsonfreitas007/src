import React from "react";
import Questao01A from "./Questao01A";
import Questao01B from "./Questao01B";

const Questao01 = (props) => {
    return (
        <div>

            {props.children}
        </div>
        // <div>
        //     {
        //         React.Children.map(
        //             children, (filho) =>{
        //                 return  React.cloneElement(filho, {questao})
        //             }
        //         )
        //     }
        // </div>
    )

}

export default Questao01