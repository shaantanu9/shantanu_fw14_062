import { useState } from "react";

export function Pen(props) {
    
    const [Pen,addpen] = useState(10)


    return (

    <div className="items">
        <span>{props.item+"s"}:</span>
        <button onClick={() => addpen(Pen+1)} className={"add"+props.item}>
            +
        </button>
        <button onClick={() => addpen(Pen-1)} className={"rem"+props.item}>
            -
        </button>
        <span className={"total"+props.item+"s"}>{Pen}</span>
    </div>


    )
}

