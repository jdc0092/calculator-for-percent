import React from "react";


function InputResult(props) {

    return (
        <div>
            <p>= {"RD$" + props.Result.toLocaleString('es-Us')}</p>
        </div>
    )

}

export default InputResult;