
import '../css/App.css';
import React from "react";



function Operations(props) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col" className='mjx-char MJXc-TeX-math-I'>N</th>
                        <th scope="col">%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="mjx-char MJXc-TeX-math-I">X</td>
                        <td>{props.percent}</td>
                    </tr>
                    <tr>
                        <td>{props.num.toLocaleString('es-Us')}</td>
                        <td>({props.numPercent}%)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Operations;
