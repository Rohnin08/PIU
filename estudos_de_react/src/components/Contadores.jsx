import { useState } from "react";

function Contadores() {
    const [count, setCount] = useState(0)
    return (
    <>
        <h1>{count}</h1>
        <div>
            <button onClick={() => setCount((count) => count + 1)}>
                Adicionar
            </button>
            <button onClick={() => setCount((count) => count - 1)}>
                Tirar
            </button>
            <button onClick={() => setCount(0)}>
                Zerar
            </button>
            <button onClick={() => setCount((count) => count * 2)}>
                Dobrar
            </button>
        </div>
    </>
    )

}

export default Contadores