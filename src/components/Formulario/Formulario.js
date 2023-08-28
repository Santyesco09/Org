import { useState } from "react";
import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (props) => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const [titulo, setTitulo] = useState("");
    const [color, setColor] = useState("");

    const { registrarColaborador, crearEquipo } = props;

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio");
        let datosEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        props.registrarColaborador(datosEnviar);
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault();
        crearEquipo({ titulo, colorPrimario: color });
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                setValor={setNombre}
            />
            <Campo
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <Campo
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                setEquipo={setEquipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo
                titulo="Titulo"
                placeholder="Ingresar titulo"
                required={true}
                valor={titulo}
                setValor={setTitulo}
            />
            <Campo
                titulo="Color"
                placeholder="Ingresar el color Hex"
                required
                valor={color}
                setValor={setColor}
                type="color"
            />
            <Boton>
                Registrar Equipo
            </Boton>
        </form>
    </section>
}

export default Formulario;