import GeradorDeResultado from "../../components/GeradorDeResultado";

export default function desafio() {

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    return (
        <div style = {estilo}>
            <h1>RESULTADO MEGA SENA:</h1>
            <GeradorDeResultado />
        </div>
    )
}