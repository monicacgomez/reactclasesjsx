import { Component } from "react";

class DibujosComplejosRender extends Component {
     // Necesitamos un array en state para ir generando nuevos elementos al pulsar un botón
    state = {
        nombres: ["Diana", "Antonia", "Adrian", "Lucia"]
    }

    generarNombre = () => {
        //Podemos utilizar directamente el método del array push, si es un objeto simple (string, it), NO PODEMOS ASIGNAR
        this.setState({
            //Si no reasignamos el valor mediante  setState, NO lo veremos
            nombres: this.state.nombres
        });
    }

    render() {
        return (
            <div>
                <h1>Dibujos complejos render</h1>
                <button onClick={this.generarNombre}>
                    Generar nombre
                </button>

                    // Esto es código JSX de React
                   {this.state.nombres.map((nombre, index) => {
                        // ESTE CÓDIGO necesita un return para el render
                        return (<h4 style={{color: "blue"}} key={index}>
                                {nombre}
                            </h4>);
                    })}

            </div>
        );
    }
}

export default DibujosComplejosRender;