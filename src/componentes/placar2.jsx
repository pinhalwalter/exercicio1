import { useState } from "react";

export default function Placar(propos) {
    const [valor,setValor] = useState(0); //hook useState

    function incrementar(){
        setValor(valor+1);
        console.log(valor);
    }
    function decrementar(){
        if(valor>0){
            setValor(valor-1);
        }
        console.log(valor);
    }

    //medoto render é o retorno da função
    return (
        <div>
            <div className="visor">
                <h1>{valor}</h1>
            </div>
            <div className="botoes">
                <button onClick={()=>{incrementar();}}>+</button>
                <button onClick={()=>{decrementar();}}>-</button>
            </div>
        </div>
    );
}