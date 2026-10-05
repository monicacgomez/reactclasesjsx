import { Component } from "react";
import HijoNumeros from "./HijoNumeros";

export default class PadreNumeros extends Component {
    state = {
        numeros: [],
        suma: 0
    }

    generarNumero = () => {
        let numero = parseInt(Math.random() * 100) + 1;
        this.state.numeros.push(numero);
        this.setState({
            numeros: [...this.state.numeros, numero]
        });
    }

    sumarNumero = (numero) => {
        this.setState({
            suma: this.state.suma + numero
        });
    }

    render() {
        return (
            <div>
                <h1>Padre números</h1>
                <button onClick={this.generarNumero}>
                    Generar número
                </button>
                <h2> Suma: {this.state.suma}</h2>
                {
                    this.state.numeros.map((numero, index) => {
                        return (<HijoNumeros numero={numero} sumarNumero={this.sumarNumero} key={index}/>)
                    })
                }
            </div>)
    }
}