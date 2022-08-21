import '../css/App.css';
import React from "react";


function BarraPercent(props) {

    const stylePercent = {
        width: props.BarraPercent + "%"
    }

    return (
        <div className="progress mb-5">
            <div className="progress-bar progress-barra" style={stylePercent} 
            role="progressbar" aria-valuenow={props.BarraPercent} aria-valuemin="0" 
            aria-valuemax={props.numPercent}>{props.BarraPercent + "%"}</div>
        </div>
    )
}
export default BarraPercent;