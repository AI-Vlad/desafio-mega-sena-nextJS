export default function  QuantidadeDeNumeros(props) {
    return(
        <select onChange = {props.function} name="" id="">
             <option value="">Selecione à quantidade de números...</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
        </select>
    )
}