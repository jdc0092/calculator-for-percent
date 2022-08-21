import React from "react";


function Inputpercent(props) {
    return (
        <div>
            {/* <label>El: <b>%</b> </label> */}
            <input type="text" className="form-control" maxLength="4" placeholder="%" onChange={props.inputPercent} />
        </div>
    )

}

export default Inputpercent;