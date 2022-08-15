import React from "react";


function Inputpercent(props) {
    return (
        <div>
            <label>El: <b>%</b> </label>
            <input type="text" maxLength="4" onChange={props.percent} />
        </div>
    )

}

export default Inputpercent;