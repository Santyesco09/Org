import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = () => {

    const [nombre, setNombre] = useState("");
    const [puesto, setPuesto] = useState("");
    const [foto, setFoto] = useState("");
    const [equipo, setEquipo] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        console.log("Manejar el envio");
        let datosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        console.log(datosEnviar);
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto
                titulo="Nombre"
                placeholder="Ingresar nombre"
                required={true}
                valor={nombre}
                setValor={setNombre}
            />
            <CampoTexto
                titulo="Puesto"
                placeholder="Ingresar puesto"
                required
                valor={puesto}
                setValor={setPuesto}
            />
            <CampoTexto
                titulo="Foto"
                placeholder="Ingresar enlace de foto"
                required
                valor={foto}
                setValor={setFoto}
            />
            <ListaOpciones
                valor={equipo}
                setEquipo={setEquipo}
            />
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}

export default Formulario;