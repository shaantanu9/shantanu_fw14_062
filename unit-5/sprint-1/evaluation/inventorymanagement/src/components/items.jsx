import { useState } from "react";

export function Items(props) {
    
    const [Book,addBook] = useState(13)
    const [Pen,addpen] = useState(13)
    const [Notebook,addNotebook] = useState(13)
    const [InkPen,addInkPens] = useState(13)

    return (

    <div className="items">
        <span>{props.item+"s"}:</span>
        <button onClick={() => addBook(props.item+1)} className={"add"+props.item}>
            +
        </button>
        <button onClick={() => addBook(props.item-1)} className={"rem"+props.item}>
            -
        </button>
        <span className={"total"+props.item+"s"}>{props.item}</span>
    </div>


    )
}


function additem(item) {

}