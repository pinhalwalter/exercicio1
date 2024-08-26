import { Component } from "react";

export default class Placar extends Component{
    constructor(props){
        super();
        this.state={valor:0};
    }

    incrementar(){
        this.setState({
            valor: this.state.valor+=1
        });
        console.log(this.state.valor);
    }
    decrementar(){
        if(this.state.valor>0){
            this.setState({
                valor:this.state.valor-=1
            });
        }
        console.log(this.state.valor);
    }

    render(){
        return(
            <div>
                <div className="visor">
                    <h1>{this.state.valor}</h1>
                </div>
                <div className="botoes">
                    <button onClick={()=>{this.incrementar();}}>+</button>
                    <button onClick={()=>{this.decrementar();}}>-</button>
                </div>
            </div>
        )
    }
}