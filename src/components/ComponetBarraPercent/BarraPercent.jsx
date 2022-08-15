import '../css/App.css';
import React from "react";


function BarraPercent(props) {

    const percent = {
        width: props.percent + "%"
    }

    return (
        <div className="progress mt-5 mb-5">
            <div className="progress-bar progress-barra" style={percent} 
            role="progressbar" aria-valuenow={props.percent} aria-valuemin="0" 
            aria-valuemax={props.numPercent}>{props.percent + "%"}</div>
        </div>
    )
}
export default BarraPercent;