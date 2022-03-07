import { useState } from "react";

export function Book(props) {
    
    const [Book,addBook] = useState(13)
    return (

    <div className="items">
        <span>{props.item+"s"}:</span>
        <button onClick={() => addBook(Book+1)} className={"add"+props.item}>
            +
        </button>
        <button onClick={() => addBook(Book-1)} className={"rem"+props.item}>
            -
        </button>
        <span className={"total"+props.item+"s"}>{Book}</span>
    </div>


    )
}
