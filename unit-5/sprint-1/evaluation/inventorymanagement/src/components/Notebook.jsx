import { useState } from "react";

export function Notebook(props) {
    
    const [Notebook,addNotebook] = useState(44)

    return (

    <div className="items">
        <span>{props.item+"s"}:</span>
        <button onClick={() => addNotebook(Notebook+1)} className={"add"+props.item}>
            +
        </button>
        <button onClick={() => addNotebook(Notebook-1)} className={"rem"+props.item}>
            -
        </button>
        <span className={"total"+props.item+"s"}>{Notebook}</span>
    </div>


    )
}
