import { useState } from "react";

export function Inkpen(props) {
    
    const [InkPen,addInkPens] = useState(78)

    return (

    <div className="items">
        <span>{props.item+"s"}:</span>
        <button onClick={() => addInkPens(InkPen+1)} className={"add"+props.item}>
            +
        </button>
        <button onClick={() => addInkPens(InkPen-1)} className={"rem"+props.item}>
            -
        </button>
        <span className={"total"+props.item+"s"}>{InkPen}</span>
    </div>


    )
}

