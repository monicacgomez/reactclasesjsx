import { Component } from "react";

export default class HijoNumeros extends Component {

    sumarNumero = () => {
        this.props.sumarNumero(this.props.numero);
    }
    
    render() {
        return (
            <div>
                <h3>Número: {this.props.numero}</h3>
                <button onClick={this.sumarNumero}> Sumar número </button>
            </div>
        )
    }
}