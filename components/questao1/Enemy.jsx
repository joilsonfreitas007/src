// Questão 1) Em arquivos diferentes, crie os seguintes componentes, usando funções:
// • “Hero”, o qual imprimirá a propriedade “name”, recebida via “props”. Além disso, mostre uma
// imagem de sua escolha, usando a tag < img >”.
// • “Enemy”, a mesma coisa de Hero, com um “name” e uma imagem.
// • “Arena”. Irá renderizar os componentes “Hero” e “Enemy”
// Ex. (render de Arena):
// <div>
//     <Hero name= “Baki” img = “../baki.png”/>
//     <Enemy name= “Yujiro” img = “../ogre.png”/>
// </div>

import React from "react";

const Enemy = (props) => {
    const {name, img} = props

    return (
        <div>
            Nome: {name}
            <img src={img}/>
        </div>
    )

}

export default Enemy;