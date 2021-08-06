import ResultListener from './ResultListener'
import { useState } from 'react'

export default function GeradorDeResultado() {

    const [finalResult, setfinalResult] = useState([])
    
    function generateResult(numberOfSorts) {
        let result = []
        let generatedNumber = 0

        for (let index = 0; index <= numberOfSorts; index++) {

            generatedNumber = Math.floor(Math.random() * 61) + 1;
            result.push(
                <div key={index} style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "60px",
                    backgroundColor: "black",
                    color: "white",
                    marginRight: "10px",
                    display: "flex",
                    fontSize: "30px",
                    justifyContent: "center",
                    alignItems: "center",
                    
                    
                }}>
                    <span  >{generatedNumber}</span>
                </div>
            )

        }

        console.log(result)
        setfinalResult(result)
    }


    return (
        <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap"
        }}>
           {finalResult}
          
          
        </div>
        <div>
                <ResultListener disabled = {true} function={generateResult} />
        </div>
        </>
    )


}



