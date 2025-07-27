import { useState } from "react";
import "./Semaforo.css"

function Semaforo() {
    const [cor, setCor] = useState("#242424")
    return (
        <>  
            <div className="semaforo">
                <div style={{backgroundColor:cor}} className="luz_semaforo">

                </div>
                <div className="bottons">
                    {/* botão vermelho */}
                    <button onClick={() => setCor("red")}>
                        🔴
                    </button>
                    {/* botão amarelo */}
                    <button onClick={() => setCor("yellow")}>
                        🟡
                    </button>
                    {/* botão verde */}
                    <button onClick={() => setCor("green")}>
                        🟢
                    </button>
                </div>
            </div>
        </>
    )
}

export default Semaforo