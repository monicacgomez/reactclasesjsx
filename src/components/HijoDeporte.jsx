import { Component } from "react";

export default class HijoDeporte extends Component {
    
    seleccionarFavorito= () => {
        // Cuando deseemos, llamamos al padre mediante su método en props
        this.props.mostrarFavorito(this.props.nombre);
    }

    render () {
        return (<div>
            <h3 style= {{color:"blue"}}> 
                Deporte: {this.props.nombre} 
            </h3>
            <button onClick={this.seleccionarFavorito}>
                Favorito
            </button>
        </div>)
    }
} 