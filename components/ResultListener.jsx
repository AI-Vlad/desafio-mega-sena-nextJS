import QuantidadeDeNumeros from "./QuantidadeDeNumeros";
import { useState } from "react";

export default function GeradorDeResultado(props) {
    const [disabled, setdisabled] = useState(true)
    const [numberOfSorts, setnumberOfSorts] = useState(0)
    const [inputLabel, setinputLabel] = useState("Escolha a quantidade de números para gerar o resultado")

    function selecionarQuantidadeDeNumeros(e) {
        // const [quantidade, setquantidade] = useState(null)
        if (e.target.value) {
            setdisabled(false)
            setinputLabel("Clique aqui para gerar o resultado")
        } else {
            setdisabled(true)
            setinputLabel("Escolha a quantidade de números para gerar o resultado")
        }
        setnumberOfSorts(e.target.value)
    }

    return (
        <>
            <div style={{ textAlign: "center" }}>
                <QuantidadeDeNumeros function={selecionarQuantidadeDeNumeros} />
            </div>
            <div style={{textAlign: "center"}}>
                <button disabled={disabled} onClick={() => props.function(numberOfSorts)}>{inputLabel}</button>
            </div>
        </>
    )

}