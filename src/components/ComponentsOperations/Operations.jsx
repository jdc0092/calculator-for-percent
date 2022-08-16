
import '../css/App.css';
import React from "react";



function Operations(props) {

    return (
        <div>
            <table className="table">
                <thead>
                    <tr className='table-dark'>
                        <th scope="col" className='fz-20 mjx-char MJXc-TeX-math-I'>N</th>
                        <th scope="col">%</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='table-active'>
                        <td className="mjx-char MJXc-TeX-math-I">X</td>
                        <td>{props.percent}%</td>
                    </tr>
                    <tr>
                        <td>{props.num.toLocaleString('es-Us')}$</td>
                        <td>({props.numPercent}%)</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Operations;
