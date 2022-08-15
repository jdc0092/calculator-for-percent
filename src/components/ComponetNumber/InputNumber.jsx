import React from "react";


function Inputnumber(props) {
    return (
        <div>
            <label>Cantidad: </label>
            <input type="text" onChange={props.number} />
            
        </div>

    )

}

export default Inputnumber;