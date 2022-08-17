import React from "react";


function InputResult(props) {

    return (
        <div className="infoResult">
            <p>{"$" + props.montPercent.toLocaleString('es-Us')}</p>
        </div>
    )

}

export default InputResult;