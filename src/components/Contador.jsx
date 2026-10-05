import { Component } from "react";

class Contador extends Component {

    // La declaración de variables no utiliza JS, es decir, CONST, VAR, LET...
    numero = 1;

    // Con los métodos sucede lo mismo
    incrementarNumero = () => {
        this.numero += 1;
        // Para acceder a cualquier elemento de la clase, se utiliza la palabra reservada THIS
        console.log("Numero: " + this.numero);
    };

    // Las variables state se declaran en un objeto de la clase
    state = {
        valor: parseInt(this.props.inicio)
    }

    incrementarValor = () => {
        // Para modificar el valor de cualquier elemento del state se utiliza setState y nos permite modificar una o varias variables a la vez

        this.setState({
            valor: this.state.valor + 1
        })
    }

    // La sintaxis de la llamada a los métodos ha cambiado en render - puedo llamar directamente al método onClick (sin lambda) y sin paréntesis
    render() {
        return (
            <div>
                <h1>Contador JSX</h1>
                <h3 style={{color:"red"}}>Valor: {this.state.valor}</h3>
                <button onClick={this.incrementarValor}>
                    Incrementar valor
                </button>
                <button onClick={this.incrementarNumero}>
                    Incrementar número
                </button>
            </div>
        );
    }
}

export default Contador;